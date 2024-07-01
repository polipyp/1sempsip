document.addEventListener('DOMContentLoaded', function() {
    // ссообщение заголовок
    setTimeout(() => {
        alert(document.title);
    }, 2000);

    // нажатие на текст
    document.getElementById('info').onclick = function() {
        let birthDate = document.createElement('div');
        birthDate.textContent = 'Ваша дата рождения';
        this.parentNode.insertBefore(birthDate, this.nextSibling);
    };

    // стилизация
    document.getElementById('styleButton').onclick = function() {
        document.getElementById('info').id = 'styled';
    };
    
    function getOS() {
        let platform = window.navigator.platform;
        let os = null; 

        if (platform.startsWith('Win')) os = 'Windows';
        else if (platform.startsWith('Mac')) os = 'MacOS';
        else if (platform.startsWith('Linux')) os = 'Linux';
        else os = 'unknown';

        return os;
    }

    function getBrowser() {
        let userAgent = navigator.userAgent;
        let browser = 'unknown';

        if (userAgent.indexOf('Firefox') > -1) {
            browser = 'Mozilla Firefox';
        } else if (userAgent.indexOf('SamsungBrowser') > -1) {
            browser = 'Samsung Internet';
        } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
            browser = 'Opera';
        } else if (userAgent.indexOf('Trident') > -1) {
            browser = 'Microsoft Internet Explorer';
        } else if (userAgent.indexOf('Edge') > -1) {
            browser = 'Microsoft Edge';
        } else if (userAgent.indexOf('Chrome') > -1) {
            browser = 'Google Chrome';
        } else if (userAgent.indexOf('Safari') > -1) {
            browser = 'Apple Safari';
        }

        return browser;
    }

    let os = getOS();
    let browser = getBrowser();
    let infoWindow = window.open('', '', 'width=300,height=200');
    infoWindow.document.write(`<p>Operating System: ${os}</p>`);
    infoWindow.document.write(`<p>Browser: ${browser}</p>`);

    setTimeout(() => {
        infoWindow.close();
    }, 5000);
});
