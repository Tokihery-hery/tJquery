
$(() => {
    let $mainmenu = $('#main-menu ul').children('li'),
        totalMainmenu = $mainmenu.length,
        openedIndex = 2,
        init = () => {
            bindEvent()
            if (validIndex(openedIndex)) {
                animateItem($mainmenu.eq(openedIndex), true, 700)
            }
        },
        bindEvent = () => {
            $mainmenu.children('.images').click(function () {
                let newIndex = $(this).parent().index()
                checkAndAnimateItem(newIndex) 
            }),
            $('.button').hover(
                function () {
                    $(this).addClass('hovered')
                },
                function () {
                    $(this).removeClass('hovered')
                }
            )
        $('.button').click(function(){
            let newIndex = $(this).index()
            checkAndAnimateItem(newIndex) 
        })
        },
    validIndex = (indexToCheck) => {
        return (indexToCheck >= 0) && (indexToCheck < totalMainmenu)
    }
    animateItem = (item, toOpen, speed) => {
        let $colorImg = item.find(".color")
        itemParam = toOpen ? { width: '420px' } : { width: '140px' }
        $colorImgParam = toOpen ? { left: '0px' } : { left: '140px' }
        $colorImg.animate($colorImgParam, speed)
        item.animate(itemParam, speed)
    }
    checkAndAnimateItem = (indexToCheckAndAnimate)=>{
        if (openedIndex === indexToCheckAndAnimate) {
            animateItem($mainmenu.eq(indexToCheckAndAnimate), false, 250)
            openedIndex = -1
        } else {
            if (validIndex(indexToCheckAndAnimate)) {
                animateItem($mainmenu.eq(openedIndex), false, 250)
                openedIndex = indexToCheckAndAnimate
                animateItem($mainmenu.eq(openedIndex), true, 250)
            }
        }
    }
    init()
})
