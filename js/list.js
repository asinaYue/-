var site_nav_bd_left = document.querySelector('.site-nav-bd-left')
var site_nav_bd_right = document.querySelector('.site-nav-bd-right')
var site_nav_menu_list_one = document.querySelector('.site-nav-menu-list-one')
var site_nav_menu_list_two = document.querySelector('.site-nav-menu-list-two')
var site_nav_menu_list_three = document.querySelector('.site-nav-menu-list-three')
var site_nav_menu_list_four = document.querySelector('.site-nav-menu-list-four')
var site_nav_menu_list_five = document.querySelector('.site-nav-menu-list-five')

// add left list mousemove fun(){}
for (var i = 0; i < site_nav_bd_left.children.length; i++) {
    site_nav_bd_left.children[0].addEventListener('mouseover', function () {
        site_nav_menu_list_one.style.display = 'block'

    },
        // add mouseout
        site_nav_bd_left.children[0].addEventListener('mouseout', function () {
            site_nav_menu_list_one.style.display = 'none'

        })

    )
}

// add right list mousemove fun(){}

for (var i = 0; i < site_nav_bd_right.children.length; i++) {
    site_nav_bd_right.children[0].addEventListener('mouseover', function () {
        site_nav_menu_list_two.style.display = 'block'

    },
        // add mouseout
        site_nav_bd_right.children[0].addEventListener('mouseout', function () {
            site_nav_menu_list_two.style.display = 'none'

        })

    )
}

for (var i = 0; i < site_nav_bd_right.children.length; i++) {
    site_nav_bd_right.children[2].addEventListener('mouseover', function () {
        site_nav_menu_list_three.style.display = 'block'

    },
        // add mouseout
        site_nav_bd_right.children[2].addEventListener('mouseout', function () {
            site_nav_menu_list_three.style.display = 'none'

        })

    )
}

for (var i = 0; i < site_nav_bd_right.children.length; i++) {
    site_nav_bd_right.children[5].addEventListener('mouseover', function () {
        site_nav_menu_list_four.style.display = 'block'

    },
        // add mouseout
        site_nav_bd_right.children[5].addEventListener('mouseout', function () {
            site_nav_menu_list_four.style.display = 'none'

        })

    )
}

for (var i = 0; i < site_nav_bd_right.children.length; i++) {
    site_nav_bd_right.children[6].addEventListener('mouseover', function () {
        site_nav_menu_list_five.style.display = 'block'

    },
        // add mouseout
        site_nav_bd_right.children[6].addEventListener('mouseout', function () {
            site_nav_menu_list_five.style.display = 'none'

        })

    )
}