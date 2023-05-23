//搜索栏 的下拉
    var tab = document.querySelector('.search-tab');
    var lis = tab.children;
    var baby = document.querySelector('.baby')

    for (var i = 0; i < lis.length; i++) {

        lis[i].onmouseover = function () {
            this.children[1].style.display = 'block'
            baby.style.borderRadius = '20px 0 0 0'
        }

        lis[i].onmouseout = function () {
            this.children[1].style.display = 'none'
            baby.style.borderRadius = '20px 0 0 20px'

        }
    }



