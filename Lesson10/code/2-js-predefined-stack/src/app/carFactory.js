var CarFactory = function() {
    return {
        assemblyLine: [],

        make: function makeACar (color) {
            this.assemblyLine.push(color+' car');
        },

        pickUp = function pickUp (color) {
            return this.assemblyLine.splice(this.assemblyLine.indexOf(color+' car'), 1);
        }

    };

};
