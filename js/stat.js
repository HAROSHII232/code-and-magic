'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;

var GAP = 20;

var BAR_WIDTH = 40;
var maxBarHeight = 150;
var BAR_X = CLOUD_X + BAR_WIDTH;
var BAR_Y = 240;
var BAR_TEXT_Y = 255;
var BAR_GAP = BAR_WIDTH + 50;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

    var maxTime = getMaxElement(times);
    var getPlayerColor = function(players) {
        if (players === 'Вы') {
            return 'rgba(255, 0, 0, 1)';
        } else {
            return 'rgba(0, 0, 255, ' + (Math.random() + 0.1).toFixed(1) + ')';
        }
    };

    for (var i = 0; i < players.length; i++) {
        var playerTime = Math.round(times[i]);
        var barHeight = ((maxBarHeight * times[i]) / maxTime) * -1;

        ctx.fillStyle = getPlayerColor(players[i]);
        ctx.fillRect(BAR_X + BAR_GAP * i, BAR_Y, BAR_WIDTH, barHeight);

        ctx.fillStyle = '#000';
        ctx.fillText(playerTime, BAR_X + BAR_GAP * i, 70);
        ctx.fillText(players[i], BAR_X + BAR_GAP * i, BAR_TEXT_Y);

    }

    // ctx.fillRect(BAR_X + BAR_GAP * 0, BAR_Y, BAR_WIDTH, 150);
    // ctx.fillText('Вы', BAR_X + BAR_GAP * 0, BAR_TEXT_Y);

    // ctx.fillRect(BAR_X + BAR_GAP * 1, BAR_Y, BAR_WIDTH, 150);
    // ctx.fillText('Вы', BAR_X + BAR_GAP * 1, BAR_TEXT_Y);

    // ctx.fillRect(BAR_X + BAR_GAP * 2, BAR_Y, BAR_WIDTH, 150);
    // ctx.fillText('Вы', BAR_X + BAR_GAP * 2, BAR_TEXT_Y);

    // ctx.fillRect(BAR_X + BAR_GAP * 3, BAR_Y, BAR_WIDTH, 150);
    // ctx.fillText('Вы', BAR_X + BAR_GAP * 3, BAR_TEXT_Y);



};