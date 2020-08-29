const fileInfo = require("./index");

// default ref. data
let data = [
  {
    lastModified: 1598593442069,
    lastModifiedDate:
      "Fri Aug 28 2020 13:44:02 GMT+0800 (Philippine Standard Time)",
    name: "README.md",
    size: 1234567, // 1.2 MB
    type: "",
  },
];

// default expected data
const expectedLastModifiedDate = new Date("Fri Aug 28 2020 13:44:02 GMT+0800 (Philippine Standard Time)")
let expected = {
  name: "README.md",
  size: "1.2 MB",
  type: "Unrecognized file.",
  lastModifiedDate: `${expectedLastModifiedDate}`,
};

test("Should return valid data result", () => {
  expect(fileInfo.get(data)).toStrictEqual(expected);
});

test("Should return Bytes for size from bytes file size", () => {
  data[0].size = 800;
  expect(fileInfo.get(data)).toEqual("800 Bytes");
});

test("Should return KB for size from bytes file size", () => {
  data[0].size = 12000;
  expect(fileInfo.get(data).size).toEqual("11.7 KB");
});

test("Should return MB for size from bytes file size", () => {
  data[0].size = 1234567;
  expect(fileInfo.get(data).size).toStrictEqual("1.2 MB");
});

test("Should return GB for size from bytes file size", () => {
  data[0].size = 1234567777;
  expect(fileInfo.get(data).size).toStrictEqual("1.1 GB");
});

test("Should return TB for size from bytes file size", () => {
  data[0].size = 12345677777777;
  expect(fileInfo.get(data).size).toStrictEqual("11.2 TB");
});

test("Should return 0 for size from bytes file size", () => {
  data[0].size = 0;
  expect(fileInfo.get(data).size).toStrictEqual(0);
});

test("Should return valid type if file type is not empty", () => {
  data[0].type = "image/png";
  expect(fileInfo.get(data).type).toStrictEqual("image/png");
});

test("Should return 'Unrecognized file' for type if file type is empty", () => {
  data[0].type = "";
  expect(fileInfo.get(data).type).toStrictEqual("Unrecognized file.");
});

test("Should return valid last modified date", () => {
  expect(fileInfo.get(data).lastModifiedDate).toStrictEqual(
    "Fri Aug 28 2020 13:44:02 GMT+0800 (Philippine Standard Time)"
  );
});

test("Should return 'Invalid date.' if last modified date is invalid", () => {
  data[0].lastModifiedDate = "";
  expect(fileInfo.get(data).lastModifiedDate).toBe("Invalid Date");
});

test("Should return valid name", () => {
  expect(fileInfo.get(data).name).toStrictEqual("README.md");
});

test("Should return 'Unnamed.' if name is empty.", () => {
  data[0].name = "";
  expect(fileInfo.get(data).name).toStrictEqual("Unnamed.");
});

// data type
test("Should return valid object", () => {
  expect(typeof fileInfo.get(data)).toBe("object");
});
test("Should return valid string for name", () => {
  expect(typeof fileInfo.get(data).name).toBe("string");
});

test("Should return valid number for size", () => {
  expect(typeof fileInfo.get(data).size).toBe("number");
});

test("Should return valid string for type", () => {
  expect(typeof fileInfo.get(data).type).toBe("string");
});

test("Should return valid string for lastModifiedDate", () => {
  expect(typeof fileInfo.get(data).lastModifiedDate).toBe("string");
});

// exceptions
test("Should throw error 'File data is empty.' if the data is empty", () => {
  expect(() => fileInfo.get(null)).toThrow("File data is empty.");
});
