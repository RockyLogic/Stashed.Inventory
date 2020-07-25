const sendToLogs = (message) => {
    let time = new Date()
    try {
        console.log(`[${time.toLocaleString('en-US', { timeZone: 'America/New_York' })}] ${message}`)
    } catch (error) {
        console.log(`[${time.toLocaleString('en-US', { timeZone: 'America/New_York' })}] Error Sending To Logs`)
    }
}

module.exports = sendToLogs