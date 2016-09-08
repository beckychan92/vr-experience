
import mnist from 'mnist';
import Synaptic, { Neuron, Layer, Network, Trainer, Architect } from 'synaptic';

var digit = mnist[1].get();
var context = document.getElementById('myCanvas').getContext('2d');

mnist.draw(digit, context); // draws a '1' mnist digit in the canvas

const set = mnist.set(700, 20);

const inputLayer = new Layer(784);
const hiddenLayer = new Layer(100);
const outputLayer = new Layer(10);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

const trainer = new Trainer(myNetwork);
trainer.train(set.training, {
    rate: .2,
    iterations: 20,
    error: .1,
    shuffle: true,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});

console.log(myNetwork.activate(set.test[0].input));
console.log(set.test[0].output);

