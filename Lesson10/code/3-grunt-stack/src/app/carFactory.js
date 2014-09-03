var CarFactory = function() {
    return {
        assembyLine: [],

        make: function makeACar (color) {
            this.assembyLine.push(color+' car');
        },

        pickUp = function pickUp (color) {
            return this.assembyLine.splice(this.assembyLine.indexOf(color+' car'), 1);
        }

    };

};
