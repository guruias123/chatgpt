import transakSDK from
'@transak/transak-sdk'

/*
* Easy and quick integration
*/
new transakSDK ({
apiKey: 'YOUR_API_KEY',
environment: 'STAGING',
themeColor: '000000'
}).init();