/*  CreateExamplePage.js
 *  
 *  The MIT License (MIT) - https://opensource.org/licenses/MIT
 *  
 *  Copyright (c) 2015 "Erich Horn"<erichhorn78,gmail.com> 
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
 
"use strict";

(function (root) {
  root.GetElementMetrics = GetElementMetrics;
  
  function GetElementMetrics (element) {
    var bounding = element.getBoundingClientRect()
      , cstyle = root.getComputedStyle(element)
      . sizing = cstyle.getPropertyValue('box-sizing')
      , margin = {
          top: parseInt(cstyle.getPropertyValue('margin-top')) || 0
        , right: parseInt(cstyle.getPropertyValue('margin-right')) || 0
        , bottom: parseInt(cstyle.getPropertyValue('margin-bottom')) || 0
        , left: parseInt(cstyle.getPropertyValue('margin-left')) || 0
      }
      , padding = {
          top: parseInt(cstyle.getPropertyValue('padding-top')) || 0
        , right: parseInt(cstyle.getPropertyValue('padding-right')) || 0
        , bottom: parseInt(cstyle.getPropertyValue('padding-bottom')) || 0
        , left: parseInt(cstyle.getPropertyValue('padding-left')) || 0
      }
      , border = {
          top: parseInt(cstyle.getPropertyValue('border-width-top')) || 0
        , right: parseInt(cstyle.getPropertyValue('border-width-right')) || 0
        , bottom: parseInt(cstyle.getPropertyValue('border-width-bottom')) || 0
        , left: parseInt(cstyle.getPropertyValue('border-width-left')) || 0
      }
      , t = padding.top + border.top
      , r = padding.right + border.right
      , b = padding.bottom + border.bottom
      , l = padding.left + border.left
      
      ;
    
    bounding.width = element.clientWidth;
    bounding.height = element.clientHeight;
    // if (sizing == 'content-box') {
      // bounding.top -= t;
      // bounding.right -= r;
      // bounding.bottom -= b;
      // bounding.left -= l;
      // bounding.width -= r + l;
      // bounding.height -= t + b;
    // }
    return {
          position: bounding
        , inner: {
            top: bounding.top + t
          , right: bounding.right + r
          , bottom: bounding.bottom + b
          , left: bounding.left + l
          , width: bounding.width + r + l
          , height: bounding.height + t + b
          }
        , margin: margin
        , border: border
        , padding: padding
        , sizing: sizing
      }
  }

})()
