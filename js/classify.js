// 获取ul
var service_bd = document.querySelector('.service-bd')

// 第一个li的元素
var bd_children = service_bd.children[0].children

// 循环所有li标签
for (var b = 0; b < service_bd.children.length; b++) {
    bd_children = service_bd.children[b].children

    // 添加鼠标触发事件
    for (var a = 1; a < bd_children.length; a++) {
        bd_children[a].addEventListener('mouseover', function () {

            // 被触发的元素变红
            this.style.color = 'red'
            // 被触发的元素添加下划线
            this.style.textDecoration = 'underline'
        })
    }

    // 添加鼠标移出事件
    for (a = 1; a < bd_children.length; a++) {
        bd_children[a].addEventListener('mouseout', function () {

            // 取消变色
            this.style.color = ''
            // 取消下划线
            this.style.textDecoration = ''
        })
    }
}










