const {createProxyMiddleware} = require('http-proxy-middleware');
//CORS 정책에 의해 포트가 서버와 클라이언트가 다르기에(5000,3000)
//proxy를 이용해, 서로 달라도 통신이 되게 해주는 코드이다
//버전이 올라가면서 쓰는 방식이 바뀌었다. const proxy로 하면 안됨
//내 2시간....
module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://portfolio-server-eta-green.vercel.app',
            changeOrigin: true
        })
    )
}