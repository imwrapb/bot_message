const TOKEN = "6295770539:AAHOxjx0Qn711p2F4dGYh8-kaSB-apQSugo"
const CHAT_ID = "1342788557" 
// const URL_API = `https://api.telegram.org/bot${Token}/sendMessage`
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`
;
// https://api.telegram.org/bot6295770539:AAHOxjx0Qn711p2F4dGYh8-kaSB-apQSugo/getUpdates
const success = document.getElementById("success")
document.getElementById("tg").addEventListener("submit", function(e) {
    e.preventDefault();
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправител:</b> ${this.name.value}\n`;
    message += `<b>Номер:</b> ${this.number.value}\n`;
    message += `<b>Почта:</b> ${this.email.value}`;
    console.log(message)
    // axios.post(apiUrl, {
    //     chat_id: chatId,
    //     document: documentUrl
    // }).then((response) => {
    //     console.log('File sent successfully!');
    // }).catch((error) => {
    //     console.error(error);
    // });

    axios.post(URL_API, {
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    }).then((res)=>{
        this.name.value=""
        this.number.value=""
        this.email.value=""
        success.innerHTML="Сообшения отпраленно!"
        success.style.display="block"
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>console.log("Success"))
})
// document.getElementById("tg").addEventListener("submit", function(e) {
//     e.preventDefault();
//     const formData = new FormData
//     formData.append("chat_id", CHAT_ID)
//     formData.append("document", this.document.files[0])
//     axios.post(URL_API , {
//        header:{
//         "Content-Type": "multipart/form-data"
//        }
//     }).then((res)=>{
//         this.document.value=""
//         success.innerHTML="Сообшения отпраленно!"
//         success.style.display="block"
//     }).catch((err)=>console.log(err))
//     .finally(()=>console.log("Success"))    
// })
