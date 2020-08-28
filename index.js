module.exports = {
  get(data) {
    if (data) {
      const file = data[0];
      return {
        name: file.name,
        size: `${file.size} bytes`,
        type: file.type ? file.type : "unrecognized file",
        lastModifiedDate: file.lastModifiedDate,
      };
    } else {
      throw new Error("File data is empty.");
    }
  }
};
