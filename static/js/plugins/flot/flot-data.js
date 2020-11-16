// Flot Charts sample data for SB Admin templates

// Flot Pie Chart with Tooltips
$(function() {

    let data = data_chart_pioples;
    let data_feeds = data_chart_feeds;

    let plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3/4,
                    // formatter: labelFormatter,
                    background: {
                        opacity: 1.5,
                        color: 'black'
                }
            }
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

    let plotObjFed = $.plot($("#flot-pie-feeds"), data_feeds, {
        series: {
            pie: {
                show: true,

                label: {
                    show: true,
                    radius: 3 / 4,
                    // formatter: labelFormatter,
                    background: {
                        opacity: 1.5,
                        color: 'black'
                    }
                }
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

    let plotObjFeds = $.plot($("#flot-pie-feedss"), data_feeds, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });
});