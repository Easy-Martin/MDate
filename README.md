# MDate

```
npm i mini-date-format --save

import MDate from 'mini-date-format'

new MDate().Format('YYYY-MM-DD hh:mm:ss q S');//  2016-12-01 14:20:01 4 607
new MDate().Format('YYYY-MM-DD');//  2016-12-01


new MDate('2015-11-01 15:25:58').Format('YYYY-MM-DD hh:mm:ss q S');//  2015-11-01 15:25:58 4 0
new MDate('2015-11-01 15:25:58').Format('YYYY-MM-DD');//  2015-11-01

```
##Format

```
@param


'Y' ----- 'Year'
'M' ----- 'Month'
'D' ----- 'Day'
'h' ----- 'hour'
'm' ----- 'minute'
's' ----- 'second'
'q' ----- 'quarter'
'S' ----- 'millisecond'
```

