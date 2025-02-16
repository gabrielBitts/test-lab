enum Direction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

export function pause(time: number) {
    return driver.pause(time)
}

export function waitElementIsDisplayed(
    element: WebdriverIO.Element,
    time: number
) {
    return element.waitForDisplayed({ timeout: time })
}

export function waitTextIsDisplayed(text: string, time: number) {
    pause(300)
    let element = $(`//*[contains(@text, '${text}')]`)
    return element.waitForDisplayed({ timeout: time })
}

export function swipeScreen(
    direction: 'up' | 'down' | 'left' | 'right',
    strength: number
) {
    const actions = {
        up: [{ action: 'move', x: 0, y: -strength }],
        down: [{ action: 'move', x: 0, y: strength }],
        left: [{ action: 'move', x: -strength, y: 0 }],
        right: [{ action: 'move', x: strength, y: 0 }],
    }
}

export function getRandomNumber(min: number, max: number) {
    const num = Math.floor(Math.random() * (min - max + 1)) + min
    return num
}
