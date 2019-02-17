import CButton from './CButton/c-button.vue';
import CBar from './CBar/c-bar.vue';

const Components = {
    CButton,
    CBar
};

const install = function (Vue) {
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    CButton,
    CBar
}

export default {
    install
}