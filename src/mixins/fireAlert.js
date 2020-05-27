export default {
    computed: {
        fireAlert() {
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false
            }, 3000);
        },
    }
}