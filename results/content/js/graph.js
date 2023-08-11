/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 417.0, "minX": 0.0, "maxY": 19734.0, "series": [{"data": [[0.0, 417.0], [0.1, 417.0], [0.2, 417.0], [0.3, 417.0], [0.4, 417.0], [0.5, 417.0], [0.6, 417.0], [0.7, 417.0], [0.8, 417.0], [0.9, 417.0], [1.0, 417.0], [1.1, 417.0], [1.2, 417.0], [1.3, 417.0], [1.4, 417.0], [1.5, 417.0], [1.6, 417.0], [1.7, 417.0], [1.8, 417.0], [1.9, 417.0], [2.0, 417.0], [2.1, 417.0], [2.2, 417.0], [2.3, 417.0], [2.4, 417.0], [2.5, 425.0], [2.6, 425.0], [2.7, 425.0], [2.8, 425.0], [2.9, 425.0], [3.0, 425.0], [3.1, 425.0], [3.2, 425.0], [3.3, 425.0], [3.4, 425.0], [3.5, 425.0], [3.6, 425.0], [3.7, 425.0], [3.8, 425.0], [3.9, 425.0], [4.0, 425.0], [4.1, 425.0], [4.2, 425.0], [4.3, 425.0], [4.4, 425.0], [4.5, 425.0], [4.6, 425.0], [4.7, 425.0], [4.8, 425.0], [4.9, 425.0], [5.0, 775.0], [5.1, 775.0], [5.2, 775.0], [5.3, 775.0], [5.4, 775.0], [5.5, 775.0], [5.6, 775.0], [5.7, 775.0], [5.8, 775.0], [5.9, 775.0], [6.0, 775.0], [6.1, 775.0], [6.2, 775.0], [6.3, 775.0], [6.4, 775.0], [6.5, 775.0], [6.6, 775.0], [6.7, 775.0], [6.8, 775.0], [6.9, 775.0], [7.0, 775.0], [7.1, 775.0], [7.2, 775.0], [7.3, 775.0], [7.4, 775.0], [7.5, 1013.0], [7.6, 1013.0], [7.7, 1013.0], [7.8, 1013.0], [7.9, 1013.0], [8.0, 1013.0], [8.1, 1013.0], [8.2, 1013.0], [8.3, 1013.0], [8.4, 1013.0], [8.5, 1013.0], [8.6, 1013.0], [8.7, 1013.0], [8.8, 1013.0], [8.9, 1013.0], [9.0, 1013.0], [9.1, 1013.0], [9.2, 1013.0], [9.3, 1013.0], [9.4, 1013.0], [9.5, 1013.0], [9.6, 1013.0], [9.7, 1013.0], [9.8, 1013.0], [9.9, 1013.0], [10.0, 1055.0], [10.1, 1055.0], [10.2, 1055.0], [10.3, 1055.0], [10.4, 1055.0], [10.5, 1055.0], [10.6, 1055.0], [10.7, 1055.0], [10.8, 1055.0], [10.9, 1055.0], [11.0, 1055.0], [11.1, 1055.0], [11.2, 1055.0], [11.3, 1055.0], [11.4, 1055.0], [11.5, 1055.0], [11.6, 1055.0], [11.7, 1055.0], [11.8, 1055.0], [11.9, 1055.0], [12.0, 1055.0], [12.1, 1055.0], [12.2, 1055.0], [12.3, 1055.0], [12.4, 1055.0], [12.5, 1165.0], [12.6, 1165.0], [12.7, 1165.0], [12.8, 1165.0], [12.9, 1165.0], [13.0, 1165.0], [13.1, 1165.0], [13.2, 1165.0], [13.3, 1165.0], [13.4, 1165.0], [13.5, 1165.0], [13.6, 1165.0], [13.7, 1165.0], [13.8, 1165.0], [13.9, 1165.0], [14.0, 1165.0], [14.1, 1165.0], [14.2, 1165.0], [14.3, 1165.0], [14.4, 1165.0], [14.5, 1165.0], [14.6, 1165.0], [14.7, 1165.0], [14.8, 1165.0], [14.9, 1165.0], [15.0, 1186.0], [15.1, 1186.0], [15.2, 1186.0], [15.3, 1186.0], [15.4, 1186.0], [15.5, 1186.0], [15.6, 1186.0], [15.7, 1186.0], [15.8, 1186.0], [15.9, 1186.0], [16.0, 1186.0], [16.1, 1186.0], [16.2, 1186.0], [16.3, 1186.0], [16.4, 1186.0], [16.5, 1186.0], [16.6, 1186.0], [16.7, 1186.0], [16.8, 1186.0], [16.9, 1186.0], [17.0, 1186.0], [17.1, 1186.0], [17.2, 1186.0], [17.3, 1186.0], [17.4, 1186.0], [17.5, 1635.0], [17.6, 1635.0], [17.7, 1635.0], [17.8, 1635.0], [17.9, 1635.0], [18.0, 1635.0], [18.1, 1635.0], [18.2, 1635.0], [18.3, 1635.0], [18.4, 1635.0], [18.5, 1635.0], [18.6, 1635.0], [18.7, 1635.0], [18.8, 1635.0], [18.9, 1635.0], [19.0, 1635.0], [19.1, 1635.0], [19.2, 1635.0], [19.3, 1635.0], [19.4, 1635.0], [19.5, 1635.0], [19.6, 1635.0], [19.7, 1635.0], [19.8, 1635.0], [19.9, 1635.0], [20.0, 1874.0], [20.1, 1874.0], [20.2, 1874.0], [20.3, 1874.0], [20.4, 1874.0], [20.5, 1874.0], [20.6, 1874.0], [20.7, 1874.0], [20.8, 1874.0], [20.9, 1874.0], [21.0, 1874.0], [21.1, 1874.0], [21.2, 1874.0], [21.3, 1874.0], [21.4, 1874.0], [21.5, 1874.0], [21.6, 1874.0], [21.7, 1874.0], [21.8, 1874.0], [21.9, 1874.0], [22.0, 1874.0], [22.1, 1874.0], [22.2, 1874.0], [22.3, 1874.0], [22.4, 1874.0], [22.5, 2295.0], [22.6, 2295.0], [22.7, 2295.0], [22.8, 2295.0], [22.9, 2295.0], [23.0, 2295.0], [23.1, 2295.0], [23.2, 2295.0], [23.3, 2295.0], [23.4, 2295.0], [23.5, 2295.0], [23.6, 2295.0], [23.7, 2295.0], [23.8, 2295.0], [23.9, 2295.0], [24.0, 2295.0], [24.1, 2295.0], [24.2, 2295.0], [24.3, 2295.0], [24.4, 2295.0], [24.5, 2295.0], [24.6, 2295.0], [24.7, 2295.0], [24.8, 2295.0], [24.9, 2295.0], [25.0, 3489.0], [25.1, 3489.0], [25.2, 3489.0], [25.3, 3489.0], [25.4, 3489.0], [25.5, 3489.0], [25.6, 3489.0], [25.7, 3489.0], [25.8, 3489.0], [25.9, 3489.0], [26.0, 3489.0], [26.1, 3489.0], [26.2, 3489.0], [26.3, 3489.0], [26.4, 3489.0], [26.5, 3489.0], [26.6, 3489.0], [26.7, 3489.0], [26.8, 3489.0], [26.9, 3489.0], [27.0, 3489.0], [27.1, 3489.0], [27.2, 3489.0], [27.3, 3489.0], [27.4, 3489.0], [27.5, 4214.0], [27.6, 4214.0], [27.7, 4214.0], [27.8, 4214.0], [27.9, 4214.0], [28.0, 4214.0], [28.1, 4214.0], [28.2, 4214.0], [28.3, 4214.0], [28.4, 4214.0], [28.5, 4214.0], [28.6, 4214.0], [28.7, 4214.0], [28.8, 4214.0], [28.9, 4214.0], [29.0, 4214.0], [29.1, 4214.0], [29.2, 4214.0], [29.3, 4214.0], [29.4, 4214.0], [29.5, 4214.0], [29.6, 4214.0], [29.7, 4214.0], [29.8, 4214.0], [29.9, 4214.0], [30.0, 4260.0], [30.1, 4260.0], [30.2, 4260.0], [30.3, 4260.0], [30.4, 4260.0], [30.5, 4260.0], [30.6, 4260.0], [30.7, 4260.0], [30.8, 4260.0], [30.9, 4260.0], [31.0, 4260.0], [31.1, 4260.0], [31.2, 4260.0], [31.3, 4260.0], [31.4, 4260.0], [31.5, 4260.0], [31.6, 4260.0], [31.7, 4260.0], [31.8, 4260.0], [31.9, 4260.0], [32.0, 4260.0], [32.1, 4260.0], [32.2, 4260.0], [32.3, 4260.0], [32.4, 4260.0], [32.5, 4270.0], [32.6, 4270.0], [32.7, 4270.0], [32.8, 4270.0], [32.9, 4270.0], [33.0, 4270.0], [33.1, 4270.0], [33.2, 4270.0], [33.3, 4270.0], [33.4, 4270.0], [33.5, 4270.0], [33.6, 4270.0], [33.7, 4270.0], [33.8, 4270.0], [33.9, 4270.0], [34.0, 4270.0], [34.1, 4270.0], [34.2, 4270.0], [34.3, 4270.0], [34.4, 4270.0], [34.5, 4270.0], [34.6, 4270.0], [34.7, 4270.0], [34.8, 4270.0], [34.9, 4270.0], [35.0, 4352.0], [35.1, 4352.0], [35.2, 4352.0], [35.3, 4352.0], [35.4, 4352.0], [35.5, 4352.0], [35.6, 4352.0], [35.7, 4352.0], [35.8, 4352.0], [35.9, 4352.0], [36.0, 4352.0], [36.1, 4352.0], [36.2, 4352.0], [36.3, 4352.0], [36.4, 4352.0], [36.5, 4352.0], [36.6, 4352.0], [36.7, 4352.0], [36.8, 4352.0], [36.9, 4352.0], [37.0, 4352.0], [37.1, 4352.0], [37.2, 4352.0], [37.3, 4352.0], [37.4, 4352.0], [37.5, 4387.0], [37.6, 4387.0], [37.7, 4387.0], [37.8, 4387.0], [37.9, 4387.0], [38.0, 4387.0], [38.1, 4387.0], [38.2, 4387.0], [38.3, 4387.0], [38.4, 4387.0], [38.5, 4387.0], [38.6, 4387.0], [38.7, 4387.0], [38.8, 4387.0], [38.9, 4387.0], [39.0, 4387.0], [39.1, 4387.0], [39.2, 4387.0], [39.3, 4387.0], [39.4, 4387.0], [39.5, 4387.0], [39.6, 4387.0], [39.7, 4387.0], [39.8, 4387.0], [39.9, 4387.0], [40.0, 5432.0], [40.1, 5432.0], [40.2, 5432.0], [40.3, 5432.0], [40.4, 5432.0], [40.5, 5432.0], [40.6, 5432.0], [40.7, 5432.0], [40.8, 5432.0], [40.9, 5432.0], [41.0, 5432.0], [41.1, 5432.0], [41.2, 5432.0], [41.3, 5432.0], [41.4, 5432.0], [41.5, 5432.0], [41.6, 5432.0], [41.7, 5432.0], [41.8, 5432.0], [41.9, 5432.0], [42.0, 5432.0], [42.1, 5432.0], [42.2, 5432.0], [42.3, 5432.0], [42.4, 5432.0], [42.5, 5668.0], [42.6, 5668.0], [42.7, 5668.0], [42.8, 5668.0], [42.9, 5668.0], [43.0, 5668.0], [43.1, 5668.0], [43.2, 5668.0], [43.3, 5668.0], [43.4, 5668.0], [43.5, 5668.0], [43.6, 5668.0], [43.7, 5668.0], [43.8, 5668.0], [43.9, 5668.0], [44.0, 5668.0], [44.1, 5668.0], [44.2, 5668.0], [44.3, 5668.0], [44.4, 5668.0], [44.5, 5668.0], [44.6, 5668.0], [44.7, 5668.0], [44.8, 5668.0], [44.9, 5668.0], [45.0, 7346.0], [45.1, 7346.0], [45.2, 7346.0], [45.3, 7346.0], [45.4, 7346.0], [45.5, 7346.0], [45.6, 7346.0], [45.7, 7346.0], [45.8, 7346.0], [45.9, 7346.0], [46.0, 7346.0], [46.1, 7346.0], [46.2, 7346.0], [46.3, 7346.0], [46.4, 7346.0], [46.5, 7346.0], [46.6, 7346.0], [46.7, 7346.0], [46.8, 7346.0], [46.9, 7346.0], [47.0, 7346.0], [47.1, 7346.0], [47.2, 7346.0], [47.3, 7346.0], [47.4, 7346.0], [47.5, 7758.0], [47.6, 7758.0], [47.7, 7758.0], [47.8, 7758.0], [47.9, 7758.0], [48.0, 7758.0], [48.1, 7758.0], [48.2, 7758.0], [48.3, 7758.0], [48.4, 7758.0], [48.5, 7758.0], [48.6, 7758.0], [48.7, 7758.0], [48.8, 7758.0], [48.9, 7758.0], [49.0, 7758.0], [49.1, 7758.0], [49.2, 7758.0], [49.3, 7758.0], [49.4, 7758.0], [49.5, 7758.0], [49.6, 7758.0], [49.7, 7758.0], [49.8, 7758.0], [49.9, 7758.0], [50.0, 8038.0], [50.1, 8038.0], [50.2, 8038.0], [50.3, 8038.0], [50.4, 8038.0], [50.5, 8038.0], [50.6, 8038.0], [50.7, 8038.0], [50.8, 8038.0], [50.9, 8038.0], [51.0, 8038.0], [51.1, 8038.0], [51.2, 8038.0], [51.3, 8038.0], [51.4, 8038.0], [51.5, 8038.0], [51.6, 8038.0], [51.7, 8038.0], [51.8, 8038.0], [51.9, 8038.0], [52.0, 8038.0], [52.1, 8038.0], [52.2, 8038.0], [52.3, 8038.0], [52.4, 8038.0], [52.5, 9081.0], [52.6, 9081.0], [52.7, 9081.0], [52.8, 9081.0], [52.9, 9081.0], [53.0, 9081.0], [53.1, 9081.0], [53.2, 9081.0], [53.3, 9081.0], [53.4, 9081.0], [53.5, 9081.0], [53.6, 9081.0], [53.7, 9081.0], [53.8, 9081.0], [53.9, 9081.0], [54.0, 9081.0], [54.1, 9081.0], [54.2, 9081.0], [54.3, 9081.0], [54.4, 9081.0], [54.5, 9081.0], [54.6, 9081.0], [54.7, 9081.0], [54.8, 9081.0], [54.9, 9081.0], [55.0, 10052.0], [55.1, 10052.0], [55.2, 10052.0], [55.3, 10052.0], [55.4, 10052.0], [55.5, 10052.0], [55.6, 10052.0], [55.7, 10052.0], [55.8, 10052.0], [55.9, 10052.0], [56.0, 10052.0], [56.1, 10052.0], [56.2, 10052.0], [56.3, 10052.0], [56.4, 10052.0], [56.5, 10052.0], [56.6, 10052.0], [56.7, 10052.0], [56.8, 10052.0], [56.9, 10052.0], [57.0, 10052.0], [57.1, 10052.0], [57.2, 10052.0], [57.3, 10052.0], [57.4, 10052.0], [57.5, 10374.0], [57.6, 10374.0], [57.7, 10374.0], [57.8, 10374.0], [57.9, 10374.0], [58.0, 10374.0], [58.1, 10374.0], [58.2, 10374.0], [58.3, 10374.0], [58.4, 10374.0], [58.5, 10374.0], [58.6, 10374.0], [58.7, 10374.0], [58.8, 10374.0], [58.9, 10374.0], [59.0, 10374.0], [59.1, 10374.0], [59.2, 10374.0], [59.3, 10374.0], [59.4, 10374.0], [59.5, 10374.0], [59.6, 10374.0], [59.7, 10374.0], [59.8, 10374.0], [59.9, 10374.0], [60.0, 11051.0], [60.1, 11051.0], [60.2, 11051.0], [60.3, 11051.0], [60.4, 11051.0], [60.5, 11051.0], [60.6, 11051.0], [60.7, 11051.0], [60.8, 11051.0], [60.9, 11051.0], [61.0, 11051.0], [61.1, 11051.0], [61.2, 11051.0], [61.3, 11051.0], [61.4, 11051.0], [61.5, 11051.0], [61.6, 11051.0], [61.7, 11051.0], [61.8, 11051.0], [61.9, 11051.0], [62.0, 11051.0], [62.1, 11051.0], [62.2, 11051.0], [62.3, 11051.0], [62.4, 11051.0], [62.5, 11157.0], [62.6, 11157.0], [62.7, 11157.0], [62.8, 11157.0], [62.9, 11157.0], [63.0, 11157.0], [63.1, 11157.0], [63.2, 11157.0], [63.3, 11157.0], [63.4, 11157.0], [63.5, 11157.0], [63.6, 11157.0], [63.7, 11157.0], [63.8, 11157.0], [63.9, 11157.0], [64.0, 11157.0], [64.1, 11157.0], [64.2, 11157.0], [64.3, 11157.0], [64.4, 11157.0], [64.5, 11157.0], [64.6, 11157.0], [64.7, 11157.0], [64.8, 11157.0], [64.9, 11157.0], [65.0, 11254.0], [65.1, 11254.0], [65.2, 11254.0], [65.3, 11254.0], [65.4, 11254.0], [65.5, 11254.0], [65.6, 11254.0], [65.7, 11254.0], [65.8, 11254.0], [65.9, 11254.0], [66.0, 11254.0], [66.1, 11254.0], [66.2, 11254.0], [66.3, 11254.0], [66.4, 11254.0], [66.5, 11254.0], [66.6, 11254.0], [66.7, 11254.0], [66.8, 11254.0], [66.9, 11254.0], [67.0, 11254.0], [67.1, 11254.0], [67.2, 11254.0], [67.3, 11254.0], [67.4, 11254.0], [67.5, 11300.0], [67.6, 11300.0], [67.7, 11300.0], [67.8, 11300.0], [67.9, 11300.0], [68.0, 11300.0], [68.1, 11300.0], [68.2, 11300.0], [68.3, 11300.0], [68.4, 11300.0], [68.5, 11300.0], [68.6, 11300.0], [68.7, 11300.0], [68.8, 11300.0], [68.9, 11300.0], [69.0, 11300.0], [69.1, 11300.0], [69.2, 11300.0], [69.3, 11300.0], [69.4, 11300.0], [69.5, 11300.0], [69.6, 11300.0], [69.7, 11300.0], [69.8, 11300.0], [69.9, 11300.0], [70.0, 14709.0], [70.1, 14709.0], [70.2, 14709.0], [70.3, 14709.0], [70.4, 14709.0], [70.5, 14709.0], [70.6, 14709.0], [70.7, 14709.0], [70.8, 14709.0], [70.9, 14709.0], [71.0, 14709.0], [71.1, 14709.0], [71.2, 14709.0], [71.3, 14709.0], [71.4, 14709.0], [71.5, 14709.0], [71.6, 14709.0], [71.7, 14709.0], [71.8, 14709.0], [71.9, 14709.0], [72.0, 14709.0], [72.1, 14709.0], [72.2, 14709.0], [72.3, 14709.0], [72.4, 14709.0], [72.5, 14798.0], [72.6, 14798.0], [72.7, 14798.0], [72.8, 14798.0], [72.9, 14798.0], [73.0, 14798.0], [73.1, 14798.0], [73.2, 14798.0], [73.3, 14798.0], [73.4, 14798.0], [73.5, 14798.0], [73.6, 14798.0], [73.7, 14798.0], [73.8, 14798.0], [73.9, 14798.0], [74.0, 14798.0], [74.1, 14798.0], [74.2, 14798.0], [74.3, 14798.0], [74.4, 14798.0], [74.5, 14798.0], [74.6, 14798.0], [74.7, 14798.0], [74.8, 14798.0], [74.9, 14798.0], [75.0, 15450.0], [75.1, 15450.0], [75.2, 15450.0], [75.3, 15450.0], [75.4, 15450.0], [75.5, 15450.0], [75.6, 15450.0], [75.7, 15450.0], [75.8, 15450.0], [75.9, 15450.0], [76.0, 15450.0], [76.1, 15450.0], [76.2, 15450.0], [76.3, 15450.0], [76.4, 15450.0], [76.5, 15450.0], [76.6, 15450.0], [76.7, 15450.0], [76.8, 15450.0], [76.9, 15450.0], [77.0, 15450.0], [77.1, 15450.0], [77.2, 15450.0], [77.3, 15450.0], [77.4, 15450.0], [77.5, 15656.0], [77.6, 15656.0], [77.7, 15656.0], [77.8, 15656.0], [77.9, 15656.0], [78.0, 15656.0], [78.1, 15656.0], [78.2, 15656.0], [78.3, 15656.0], [78.4, 15656.0], [78.5, 15656.0], [78.6, 15656.0], [78.7, 15656.0], [78.8, 15656.0], [78.9, 15656.0], [79.0, 15656.0], [79.1, 15656.0], [79.2, 15656.0], [79.3, 15656.0], [79.4, 15656.0], [79.5, 15656.0], [79.6, 15656.0], [79.7, 15656.0], [79.8, 15656.0], [79.9, 15656.0], [80.0, 16603.0], [80.1, 16603.0], [80.2, 16603.0], [80.3, 16603.0], [80.4, 16603.0], [80.5, 16603.0], [80.6, 16603.0], [80.7, 16603.0], [80.8, 16603.0], [80.9, 16603.0], [81.0, 16603.0], [81.1, 16603.0], [81.2, 16603.0], [81.3, 16603.0], [81.4, 16603.0], [81.5, 16603.0], [81.6, 16603.0], [81.7, 16603.0], [81.8, 16603.0], [81.9, 16603.0], [82.0, 16603.0], [82.1, 16603.0], [82.2, 16603.0], [82.3, 16603.0], [82.4, 16603.0], [82.5, 16811.0], [82.6, 16811.0], [82.7, 16811.0], [82.8, 16811.0], [82.9, 16811.0], [83.0, 16811.0], [83.1, 16811.0], [83.2, 16811.0], [83.3, 16811.0], [83.4, 16811.0], [83.5, 16811.0], [83.6, 16811.0], [83.7, 16811.0], [83.8, 16811.0], [83.9, 16811.0], [84.0, 16811.0], [84.1, 16811.0], [84.2, 16811.0], [84.3, 16811.0], [84.4, 16811.0], [84.5, 16811.0], [84.6, 16811.0], [84.7, 16811.0], [84.8, 16811.0], [84.9, 16811.0], [85.0, 17654.0], [85.1, 17654.0], [85.2, 17654.0], [85.3, 17654.0], [85.4, 17654.0], [85.5, 17654.0], [85.6, 17654.0], [85.7, 17654.0], [85.8, 17654.0], [85.9, 17654.0], [86.0, 17654.0], [86.1, 17654.0], [86.2, 17654.0], [86.3, 17654.0], [86.4, 17654.0], [86.5, 17654.0], [86.6, 17654.0], [86.7, 17654.0], [86.8, 17654.0], [86.9, 17654.0], [87.0, 17654.0], [87.1, 17654.0], [87.2, 17654.0], [87.3, 17654.0], [87.4, 17654.0], [87.5, 17740.0], [87.6, 17740.0], [87.7, 17740.0], [87.8, 17740.0], [87.9, 17740.0], [88.0, 17740.0], [88.1, 17740.0], [88.2, 17740.0], [88.3, 17740.0], [88.4, 17740.0], [88.5, 17740.0], [88.6, 17740.0], [88.7, 17740.0], [88.8, 17740.0], [88.9, 17740.0], [89.0, 17740.0], [89.1, 17740.0], [89.2, 17740.0], [89.3, 17740.0], [89.4, 17740.0], [89.5, 17740.0], [89.6, 17740.0], [89.7, 17740.0], [89.8, 17740.0], [89.9, 17740.0], [90.0, 18035.0], [90.1, 18035.0], [90.2, 18035.0], [90.3, 18035.0], [90.4, 18035.0], [90.5, 18035.0], [90.6, 18035.0], [90.7, 18035.0], [90.8, 18035.0], [90.9, 18035.0], [91.0, 18035.0], [91.1, 18035.0], [91.2, 18035.0], [91.3, 18035.0], [91.4, 18035.0], [91.5, 18035.0], [91.6, 18035.0], [91.7, 18035.0], [91.8, 18035.0], [91.9, 18035.0], [92.0, 18035.0], [92.1, 18035.0], [92.2, 18035.0], [92.3, 18035.0], [92.4, 18035.0], [92.5, 18236.0], [92.6, 18236.0], [92.7, 18236.0], [92.8, 18236.0], [92.9, 18236.0], [93.0, 18236.0], [93.1, 18236.0], [93.2, 18236.0], [93.3, 18236.0], [93.4, 18236.0], [93.5, 18236.0], [93.6, 18236.0], [93.7, 18236.0], [93.8, 18236.0], [93.9, 18236.0], [94.0, 18236.0], [94.1, 18236.0], [94.2, 18236.0], [94.3, 18236.0], [94.4, 18236.0], [94.5, 18236.0], [94.6, 18236.0], [94.7, 18236.0], [94.8, 18236.0], [94.9, 18236.0], [95.0, 18588.0], [95.1, 18588.0], [95.2, 18588.0], [95.3, 18588.0], [95.4, 18588.0], [95.5, 18588.0], [95.6, 18588.0], [95.7, 18588.0], [95.8, 18588.0], [95.9, 18588.0], [96.0, 18588.0], [96.1, 18588.0], [96.2, 18588.0], [96.3, 18588.0], [96.4, 18588.0], [96.5, 18588.0], [96.6, 18588.0], [96.7, 18588.0], [96.8, 18588.0], [96.9, 18588.0], [97.0, 18588.0], [97.1, 18588.0], [97.2, 18588.0], [97.3, 18588.0], [97.4, 18588.0], [97.5, 19734.0], [97.6, 19734.0], [97.7, 19734.0], [97.8, 19734.0], [97.9, 19734.0], [98.0, 19734.0], [98.1, 19734.0], [98.2, 19734.0], [98.3, 19734.0], [98.4, 19734.0], [98.5, 19734.0], [98.6, 19734.0], [98.7, 19734.0], [98.8, 19734.0], [98.9, 19734.0], [99.0, 19734.0], [99.1, 19734.0], [99.2, 19734.0], [99.3, 19734.0], [99.4, 19734.0], [99.5, 19734.0], [99.6, 19734.0], [99.7, 19734.0], [99.8, 19734.0], [99.9, 19734.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 3.0, "series": [{"data": [[9000.0, 1.0], [10000.0, 1.0], [10300.0, 1.0], [11200.0, 1.0], [700.0, 1.0], [11100.0, 1.0], [11000.0, 1.0], [11300.0, 1.0], [14700.0, 2.0], [15400.0, 1.0], [15600.0, 1.0], [1000.0, 2.0], [16800.0, 1.0], [16600.0, 1.0], [18000.0, 1.0], [1100.0, 2.0], [17700.0, 1.0], [18200.0, 1.0], [17600.0, 1.0], [18500.0, 1.0], [19700.0, 1.0], [1600.0, 1.0], [1800.0, 1.0], [2200.0, 1.0], [3400.0, 1.0], [4300.0, 2.0], [4200.0, 3.0], [5400.0, 1.0], [5600.0, 1.0], [400.0, 2.0], [7300.0, 1.0], [7700.0, 1.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 33.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 33.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 12.299999999999999, "minX": 1.69175232E12, "maxY": 12.299999999999999, "series": [{"data": [[1.69175232E12, 12.299999999999999]], "isOverall": false, "label": "ThreadLogin", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69175232E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 775.0, "minX": 1.0, "maxY": 17275.5, "series": [{"data": [[8.0, 1013.0], [2.0, 5668.0], [9.0, 16603.0], [10.0, 16695.25], [11.0, 17275.5], [12.0, 9876.5], [3.0, 8038.0], [13.0, 775.0], [14.0, 9610.5], [15.0, 15153.25], [16.0, 9727.5], [4.0, 5432.0], [1.0, 4387.0], [17.0, 7500.333333333333], [18.0, 5108.4], [19.0, 2725.75], [5.0, 2662.5], [6.0, 5738.0], [7.0, 11300.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.299999999999999, 8733.425]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 19.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 80.66666666666667, "minX": 1.69175232E12, "maxY": 391971.4, "series": [{"data": [[1.69175232E12, 391971.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69175232E12, 80.66666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69175232E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 8733.425, "minX": 1.69175232E12, "maxY": 8733.425, "series": [{"data": [[1.69175232E12, 8733.425]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69175232E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 472.2250000000001, "minX": 1.69175232E12, "maxY": 472.2250000000001, "series": [{"data": [[1.69175232E12, 472.2250000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69175232E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 309.7250000000001, "minX": 1.69175232E12, "maxY": 309.7250000000001, "series": [{"data": [[1.69175232E12, 309.7250000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69175232E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 417.0, "minX": 1.69175232E12, "maxY": 19734.0, "series": [{"data": [[1.69175232E12, 19734.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69175232E12, 18005.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69175232E12, 19734.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69175232E12, 18570.399999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69175232E12, 417.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69175232E12, 7898.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69175232E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2892.0, "minX": 1.0, "maxY": 16129.5, "series": [{"data": [[2.0, 13004.5], [1.0, 9081.0], [4.0, 16129.5], [6.0, 2892.0], [3.0, 7346.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 178.0, "minX": 1.0, "maxY": 564.5, "series": [{"data": [[2.0, 527.5], [1.0, 178.0], [4.0, 244.5], [6.0, 564.5], [3.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.69175232E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.69175232E12, 0.6666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69175232E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.69175232E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.69175232E12, 0.6666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69175232E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.69175232E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.69175232E12, 0.6666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69175232E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.69175232E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.69175232E12, 0.6666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69175232E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

