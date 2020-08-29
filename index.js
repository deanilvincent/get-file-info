module.exports = {
  get(data) {
    if (data) {
      const file = data[0];
      // convert bytes to size
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const bytes = file.size;
      if (bytes !== 0) {
        const i = parseInt(
          Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024)),
          10
        );
        if (i === 0) return `${bytes} ${sizes[i]}`;
        file.size = `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
      } else {
        file.size = 0;
      }

      return {
        name: file.name ? file.name : "Unnamed.",
        size: file.size,
        type: file.type ? file.type : "Unrecognized file.",
        lastModifiedDate: file.lastModifiedDate
          ? file.lastModifiedDate
          : "Invalid Date",
      };
    } else {
      throw new Error("File data is empty.");
    }
  },
};
