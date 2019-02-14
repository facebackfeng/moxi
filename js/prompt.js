/*
    var d1 = new Dialog();
    d1.init({
        id: '1',
        Style: 1,
        w: 300,
        h: 150,
        pos: 'top',
        message: 'hello world'
    });
  setting{
      id : 0,  状态
      Style : 1 | 2
      w : 200,   宽
      h : 200,   高
      pos : 'center'|'top'|'rightbottom', 默认center
      color : '#ccc',   颜色
      message : '这里放提示内容'
      mark : false     遮罩，默认无
  }
 */
function Dialog() {
    this.oDiv = null;
    this.mark = null;
    // 默认参数
    this.setting = {
        Style: 1,
        w: 300,
        h: 150,
        pos: 'center',
        color: '#000',
        message: '这是一个提示框',
        mark: false
    }
}
//拷贝默认设置，有则替换
function extend(obj1, obj2) {
    //obj2拷贝给obj1
    for (var key in obj2) {
        obj1[key] = obj2[key]
    }
}
//存放开关，控制只能开启一个
Dialog.prototype.status = {
    //		0 : true//动态创建开关 一组开关
    //		1 : true,
    //		2 : true
}

//方法：构造函数.原型.方法名
Dialog.prototype.init = function (opt) {
    //配置参数
    extend(this.setting, opt);

    if (!this.status[opt.id]) {
        //一号样式框
        if (this.setting.Style == 1) {
            this.creat1();
            this.setData();

        }
        //二号样式框
        if (this.setting.Style == 2) {
            this.creat2();
            this.setData();

        }
        this.status[opt.id] = true;
        // console.log(this.status);
        //遮罩：如果设置了该参数，就可以创建
        if (this.setting.mark) {
            this.markDiv();
        }
        //开关
        if (this.status[opt.id]) {
            this.close(opt);
            // this.status[opt.id] = false;
        }
    }

}

Dialog.prototype.creat1 = function () {
    this.oDiv = document.createElement('div');
    this.oDiv.className = 'promptDiv';
    this.oDiv.innerHTML = `<div class="promptContent onlytext">
                                <p>${this.setting.message}</p>  
                            </div>
                            <input type="button" class="close" value="确定">`;
    document.body.appendChild(this.oDiv);
}
Dialog.prototype.creat2 = function () {
    this.oDiv = document.createElement('div');
    this.oDiv.className = 'promptDiv';
    this.oDiv.innerHTML = `<div class="title">
                                <span class="close">X</span>
                                <div class="promptContent">${this.setting.message}</div>
                            </div>`;
    document.body.appendChild(this.oDiv);
}
Dialog.prototype.setData = function () {

    //设置盒子的宽高和位置
    this.oDiv.style.width = this.setting.w + 'px';
    this.oDiv.style.height = this.setting.h + 'px';
    if (this.setting.pos == 'rightbottom') {
        //放在右下角
        css(this.oDiv, 'right', 0);
        css(this.oDiv, 'bottom', 0);
    }
    if (this.setting.pos == 'center') {
        var l = (window.innerWidth - this.oDiv.offsetWidth) / 2;
        var t = (window.innerHeight - this.oDiv.offsetHeight) / 2;
        css(this.oDiv, 'left', l + 'px');
        css(this.oDiv, 'top', t + 'px');
    }
    if (this.setting.pos == 'top') {
        var l = (window.innerWidth - this.oDiv.offsetWidth) / 2;
        css(this.oDiv, 'top', 0);
        css(this.oDiv, 'left', l + 'px');
    }
    var promptContent = this.oDiv.getElementsByClassName('promptContent');
    promptContent[0].style.color = this.setting.color;
}
//遮罩
Dialog.prototype.markDiv = function () {
    this.mark = document.createElement('div');
    this.mark.className = 'mark';
    // css(this.mark, 'width', window.innerWidth + 'px');
    // css(this.mark, 'height', window.innerHeight + 'px');
    document.body.appendChild(this.mark);
}

Dialog.prototype.close = function (opt) {
    var _this = this;
    this.oDiv.onclick = function (ev) {
        var ev = ev || window.event;
        if (ev.target.className == 'close') {
            //				alert(123);
            (_this.oDiv.parentNode).removeChild(_this.oDiv);
            _this.status[opt.id] = false;
        }

        if (_this.setting.mark) {
            //删除遮罩
            document.body.removeChild(_this.mark);
        }

    }

}