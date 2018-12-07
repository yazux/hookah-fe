import {TweenMax} from "gsap/TweenMax";
import RadialProgressChart from 'radial-progress-chart';

export default {
    name: 'radial-progress',
    props: ['percent', 'symbol', 'width', 'color', 'fontSize', 'fontColor', 'circleWidth', 'radius'],
    components: {},
    data () {
      return {
        data: {
            percent: 0,
            symbol: '',
            width: '50',
            color: '#ff3a42',
            fontSize: '5px',
            fontColor: '#000',
            circleWidth: 1,
            radius: 8
        }
      }
    },
    computed: {},
    watch: {},
    methods: {
        init() {
            this.data.percent   = (this.$props.percent)   ? this.$props.percent   : 0;
            this.data.symbol    = (this.$props.symbol)    ? this.$props.symbol    : '';
            this.data.width     = (this.$props.width)     ? this.$props.width     : 50;
            this.data.color     = (this.$props.color)     ? this.$props.color     : '#ff3a42';
            this.data.fontSize  = (this.$props.fontSize)  ? this.$props.fontSize  : '5px';
            this.data.fontColor = (this.$props.fontColor) ? this.$props.fontColor : '#000';
            this.data.radius    = (this.$props.radius)    ? this.$props.radius    : 8;
            this.data.circleWidth = (this.$props.circleWidth) ? ((this.$props.circleWidth > 10) ? 1 : this.$props.circleWidth ) : 1;
            this.data.svgWidth = (parseInt(this.data.radius) + parseInt(this.data.circleWidth));

            let circle   = this.$refs.svg,
                bg       = this.$refs.bg,
                text     = this.$refs.text,
                progress = this.$refs.progress;
                
            
            circle.style.width      = this.data.width + 'px';
            let viewBox = this.data.circleWidth + ' ' + this.data.circleWidth + ' ' + (this.data.svgWidth * 2) + ' ' + (this.data.svgWidth * 2);
            circle.setAttribute('viewBox', viewBox);
            console.log('viewBox: ' + viewBox);
            //this.data.circleWidth = 1
            //this.data.radius = 2
            // parseInt(this.data.circleWidth)
            // parseInt(this.data.radius)

            bg.setAttribute('r', this.data.svgWidth);
            bg.setAttribute('cx', this.data.svgWidth);
            bg.setAttribute('cy', this.data.svgWidth);

            progress.style.stroke   = this.data.color;
            progress.style['stroke-width'] = this.data.circleWidth;
            progress.setAttribute('r', (this.data.svgWidth - 1));
            progress.setAttribute('cx', this.data.svgWidth);
            progress.setAttribute('cy', this.data.svgWidth);

            text.style['font-size'] = this.data.fontSize;
            text.style['fill']      = this.data.fontColor;
            

            this.initRadial();
        },
        initRadial() {
            let circles = this.$refs.svg.querySelectorAll(".stat-circle circle");
            if (!circles || !circles.length) return;
            circles.forEach(circle => {
                let maxVal = this.data.svgWidth/10;
                console.log('svgWidth: ' + this.data.svgWidth + ', maxVal: ' + maxVal);
                new TweenMax.to(circle, maxVal, {
                    strokeDashoffset: (-51 -((51 / 100) * parseFloat(this.data.percent)))
                });
            });
        },
        testInit() {
            let circle = this.$refs.circle;
            let settings = {
                labelStart: '\uF105',
                value: 500,
                color: {
                  linearGradient: {
                    x1: '0%',
                    y1: '100%',
                    x2: '50%',
                    y2: '0%',
                    spreadMethod: 'pad'
                  },
                  stops: [{
                    offset: '0%',
                    'stop-color': '#fe08b5',
                    'stop-opacity': 1
                  }, {
                    offset: '100%',
                    'stop-color': '#ff1410',
                    'stop-opacity': 1
                  }]
                }
            };            

            new RadialProgressChart(circle, {
                diameter: (this.$props.width) ? this.$props.width : 80,
                max: 100,
                round: true,
                stroke: {width: 20},
                series: [{
                    value: parseInt(this.$props.percent),
                    offset: 10,
                    color: {
                        linearGradient: {
                          x1: '0%',  y1: '100%',
                          x2: '50%', y2: '0%',
                          spreadMethod: 'pad'
                        },
                        stops: [
                            {offset: '0%',   'stop-color': 'red', 'stop-opacity': 1}, 
                            {offset: '100%', 'stop-color': 'orange', 'stop-opacity': 1},
                        ]
                      }
                }],
                center: [value => {return value + '%'}]
            });

            
            this.$nextTick(() => {    
                circle.style.width = this.$props.width;
                circle.querySelector('svg').style.width = this.$props.width;
            });
        }
    },
    created: function() {
      this.$nextTick(() => {
        //this.init();
        this.testInit();
      });
    }
  }