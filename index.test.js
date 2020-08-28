const fileInfo = require("./index");

test("Should return valid data result", () => {
  const data = [
    {
      lastModified: 1598593442069,
      lastModifiedDate: new Date(
        "Fri Aug 28 2020 13:44:02 GMT+0800 (Philippine Standard Time)"
      ),
      name: "README.md",
      size: 15,
      type: "",
    },
  ];
  const expected = {
    name: "README.md",
    size: "15 bytes",
    type: "unrecognized file",
    lastModifiedDate: new Date(
      "Fri Aug 28 2020 13:44:02 GMT+0800 (Philippine Standard Time)"
    ),
  };
  expect(fileInfo.get(data)).toStrictEqual(expected);
});

test("Should throw error 'File data is empty.' if the data is empty", () => {
  expect(() => fileInfo.get(null)).toThrow("File data is empty.");
});

