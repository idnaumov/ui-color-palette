var App = new Vue({
    el: '#app',
    data: {
        dropdown_visible: false,
        selected: null,
        selectedPalette: null,
        selectedColors: [],
        copyText: "🎨 Click-to-Copy HEX Color code",
        selectedInfo: !0,
        arr: arr,
        arrColors: arrColors,
        menuExpanded: !1,
        converterInput: "",

        // COLORS
        bgColor: '#fff',
        headerColor: '#F3F3F3',
        textColor: '#2C2C2C',
        theme: 'light',
        button_text: 'Dark Theme'
    },
    computed: {
        rgbColor() {
            return this.Converter(this.converterInput)
        },
        rgbaColor() {
            return this.Converter(this.converterInput) + ", 1"
        }
    },
    methods: {
        showMenu() {
            this.dropdown_visible = !this.dropdown_visible
            console.log(this.dropdown_visible)
        },
        changeTheme() {
            if (this.theme == 'light') {
                this.bgColor = '#2c2c2c';
                this.headerColor = '#141414';
                this.textColor = '#fff';
                this.theme = 'dark',
                this.button_text = 'Light Theme'
            } else {
                this.bgColor = '#fff',
                this.headerColor = '#F3F3F3',
                this.textColor = '#2C2C2C',
                this.theme = 'light',
                this.button_text = 'Dark Theme'
            }

            localStorage.setItem('theme', this.theme);
        },
        expandMenu() {
            this.menuExpanded = !this.menuExpanded
        },
        showColors(e) {
            this.selectedPalette = arr[e],
            this.selectedColors = arrColors[e], 
            this.menuExpanded = !1
            this.selected = e;
        },
        showInfo() {
            this.selectedInfo = !0, setTimeout(() => {
                this.selectedInfo = !1
            }, 1e3)
        },
        getRandomInt: (e, t) => (e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e),
        copyColor(e) {
            navigator.clipboard.writeText(e), rI = this.getRandomInt(0, answText.length - 1), this.copyText = answText[rI].text, this.showInfo()
        },
        Converter(e) {
            let t, r;
            return e.match(/^#?([\da-fA-F]{6})$/) ? (t = e.substring(e.indexOf("#") + 1), r = t.match(/[\da-fA-F]{2}/g), rgbS = parseInt(r[0], 16) + ", " + parseInt(r[1], 16) + ", " + parseInt(r[2], 16), rgbS) : e.match(/\d+/g) ? (t = e.match(/\d+/g), t = "#" + ((1 << 24) + (parseInt(t[0]) << 16) + (parseInt(t[1]) << 8) + parseInt(t[2])).toString(16).slice(1), t || "0, 0, 0") : "0, 0, 0"
        }
    },
    mounted() {
        this.showColors(0)

        if (localStorage.getItem('theme') === 'dark') {
            this.bgColor = '#2c2c2c';
            this.headerColor = '#141414';
            this.textColor = '#fff';
            this.theme = 'dark',
            this.button_text = 'Light Theme'
        } else {
            this.bgColor = '#fff',
            this.headerColor = '#F3F3F3',
            this.textColor = '#2C2C2C',
            this.theme = 'light',
            this.button_text = 'Dark Theme'
        }
    }
});