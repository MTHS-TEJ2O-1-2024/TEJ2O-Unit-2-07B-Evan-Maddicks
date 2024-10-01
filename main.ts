/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Sep 2024
 * This program will allow you to "click cookies"
*/

let CookieNumber = 0

input.onButtonPressed(Button.A,function () {
CookieNumber += 1
basic.showNumber(CookieNumber)
})