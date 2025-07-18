const el_array = [...document.querySelectorAll('.button--type--menu'),
...document.querySelectorAll('.button--type--call'),
...document.querySelectorAll('.button--type--text')
];
let ovr = document.querySelector('.modal');
const close_array = document.querySelectorAll('.button--type--close');
const keys = {
    'menu': {
        open: 'menu--action--open',
        close: 'menu--action--close',
    },
    'text': {
        open: 'feedback--action--open',
        close: 'feedback--action--close',
    },
    'call': {
        open: 'call--action--open',
        close: 'call--action--close',
    }
}
let el;
let el_open;
let ovr_state;

function button_close() {
    close_array.forEach(elem => {
        elem.addEventListener('click', function click_btn(e) {
            e.stopImmediatePropagation();
            overlay_bg('close', el, el_open);
            elem.removeEventListener('click', click_btn)
        });
    });
};
function switch_class(elem, keysName) {
    if (elem.classList.contains(keys[keysName].open)) {
        elem.classList.replace(keys[keysName].open, keys[keysName].close);
    } else if (elem.classList.contains(keys[keysName].close)) {
        elem.classList.replace(keys[keysName].close, keys[keysName].open);
    } else {
        elem.classList.add(keys[keysName].open);
    };
};
function overlay_bg(state, elem, keysName) {
    switch (state) {
        case 'open':
            ovr.classList.replace('modal--action--close', 'modal--action--open') || ovr.classList.add('modal--action--open');
            break
        case 'close':
            ovr.classList.replace('modal--action--open', 'modal--action--close');
            elem.classList.replace(keys[keysName].open, keys[keysName].close);
            break
    };
};
function close_open(elem, keysName) {
    elem ? elem.classList.replace(keys[keysName].open, keys[keysName].close) : null;
};
function toggle(attr) {
    close_open(el, el_open);

    switch (attr) {
        case 'menu':
            el = document.querySelector('.menu');
            el_open = 'menu';
            ovr_state = 'open';
            break;
        case 'call':
            el = document.querySelector('.call');
            el_open = 'call';
            ovr_state = 'open';
            break;
        case 'text':
            el = document.querySelector('.feedback');
            el_open = 'text';
            ovr_state = 'open';
            break;
    };

    switch_class(el, el_open);
    button_close(el, el_open);
    overlay_bg(ovr_state, el, el_open);
};

export function modal_view() {
    el_array.forEach(clk_el => {
        clk_el.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            toggle(clk_el.dataset.attr);

            ovr.addEventListener('click', function ovr_clk(e) {
                e.stopImmediatePropagation();
                ovr.classList.replace('modal--action--open', 'modal--action--close');
                el.classList.replace(keys[el_open].open, keys[el_open].close);
                ovr.removeEventListener('click', ovr_clk)
            });
        });
    });
}
