import { browser } from '@wdio/globals'

export default class Page {
    open(path: string) {
        return browser.url(`https://start.duckduckgo.com/${path}`)
    }
}
