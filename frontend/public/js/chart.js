
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const options = {
    scales: {
        x: {
            display: false,
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            }
        },
        y: {
            display: false,
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            }
        }
    },
    elements: {
        point: {
            radius: 0
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
    responsive: true,
    maintainAspectRatio: false
}

const data_1 = {
    labels: labels,
    datasets: [
        {
            label: 'rPSH',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [35, 39, 37, 36, 40, 38, 33, 35, 37, 35, 34, 32, 40, 39, 37, 33, 32, 20, 33, 35, 34, 35, 34, 32,
                35, 39, 37, 33, 32, 31, 33, 35, 27, 25, 24, 22, 21, 20, 21, 30, 22, 20, 21, 18, 19, 20, 22, 21],
        }
    ]
};

const data_2 = {
    labels: labels,
    datasets: [
        {
            label: 'rKYJ',
            backgroundColor: 'rgb(83, 200, 132)',
            borderColor: 'rgb(83, 200, 132)',
            data: [23,22,20,24,24,21,23,21,23,24,25,23,25,20,25,23,20,21,20,24,21,21,22,23,26,25,27,27,26,26,25,27,25,51,50,49,51,55,53,51,53,50,50,52,52,53,50,51],
        }
    ]
};

const data_3 = {
    labels: labels,
    datasets: [
        {
            label: 'rABC',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [23,22,23,20,21,22,23,22,20,21,20,21,17,17,17,18,20,18,17,19,18,20,17,20,17,14,17,16,17,16,17,14,16,16,15,16,11,13,10,13,12,12,12,13,10,12,11,10],
        }
    ]
};

const data_4 = {
    labels: labels,
    datasets: [
        {
            label: 'rDEF',
            backgroundColor: 'rgb(83, 200, 132)',
            borderColor: 'rgb(83, 200, 132)',
            data: [22,23,21,22,25,24,22,25,20,23,20,25,26,25,24,23,26,20,25,27,23,23,24,26,25,28,26,26,29,28,29,27,27,29,26,26,26,30,26,25,26,20,25,24,25,27,30,31],
        }
    ]
};

const data_5 = {
    labels: labels,
    datasets: [
        {
            label: 'rGHI',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [30,33,31,30,32,35,35,32,34,30,31,34,34,32,31,31,34,31,33,35,34,32,34,35,10,13,11,10,12,12,13,12,11,11,11,13,21,20,20,20,24,24,20,22,23,20,20,18],
        }
    ]
};

const config_1 = {
    type: 'line',
    data: data_1,
    options: options
};

const config_2 = {
    type: 'line',
    data: data_2,
    options: options
};

const config_3 = {
    type: 'line',
    data: data_3,
    options: options
};

const config_4 = {
    type: 'line',
    data: data_4,
    options: options
};

const config_5 = {
    type: 'line',
    data: data_5,
    options: options
};

const chart_1 = new Chart(
    document.getElementById('chart-1'),
    config_1
);

const chart_2 = new Chart(
    document.getElementById('chart-2'),
    config_2
);

const chart_3 = new Chart(
    document.getElementById('chart-3'),
    config_3
);

const chart_4 = new Chart(
    document.getElementById('chart-4'),
    config_4
);

const chart_5 = new Chart(
    document.getElementById('chart-5'),
    config_5
);

const chart_my = new Chart(
    document.getElementById('chart-my'),
    config_5
);