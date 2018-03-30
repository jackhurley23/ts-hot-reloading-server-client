export const someObj = {
  value: 0,
  inc: function() {
    this.value++;
  },
  get: function() {
    return this.value;
  }
};
