import React from 'react';
import * as echarts from 'echarts/core';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { PieChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent
]);


const MarketingChart = () => {
  const getOption = () => ({
    legend: {
      top: '5%',
      left: '4.5%',
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 20,
      textStyle: {
        fontSize: 12,
        color: getColor('gray-600'),
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },

        data: [
          {
            value: 1048,
            name: 'Acquisition',
            itemStyle: {
              color: getColor('primary'),
            }
          },
          {
            value: 735,
            name: 'Purchase',
            itemStyle: {
              color: getColor('facebook'),
            }
          },
          {
            value: 580,
            name: 'Retention',
            itemStyle: {
              color: getColor('warning'),
            }
          },
        ]
      }
    ],
    tooltip: {
      trigger: 'item',
      padding: [7, 10],
      backgroundColor: getColor('gray-100'),
      borderColor: getColor('gray-300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      },
    }
  });

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption()}
      style={{ height: '16rem' }}
    />
  );
};


export default MarketingChart;
