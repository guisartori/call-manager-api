import mailer from 'nodemailer'

const mail = (to: string, subject: string, text: string) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'gui.sartori96@gmail.com',
            pass: 'gui123@sartori456-'
        }
    })

    const message = {
        from: 'gui.sartori96@gmail.com',
        to,
        subject,
        text
    }

    smtpTransport.sendMail(message, (error, response) => {
        //TODO: MELHORAR A SAÍDA DE ERROS
        if(error){
            console.log(error)
        } else {
            console.log(response.message)
        }
        smtpTransport.close()
    })
}

export default mail