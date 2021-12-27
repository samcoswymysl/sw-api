
const { getOpeningCrawlSetWitchCount } = require('../controllers/contactWithSWAPI/openingCrawlsDataController');

const testString = ['....Lorem \n  ipsum \r  dolor \r\n\r   sit\n\ramet\n\r\nconsectetur  \n\r  adipisicing\n\r    \r\nelit...Asperiores   cum   delectus   dignissimos    doloremque   eius   enim   eum   ipsam   laboriosam .\n\r   mollitia .optio,praesentium!!!    ??provident??? quasi lorem, LORem...LoreM IpSuM    quo saepe sed suscipit, temporibus.Aperiam,laboriosam...'];

const xx = ['aaa aa aaaa aa aaaa']

const expected = {
  lorem: 4,
  ipsum: 2,
  dolor: 1,
  sit: 1,
  amet: 1,
  consectetur: 1,
  adipisicing: 1,
  elit: 1,
  asperiores: 1,
  cum: 1,
  delectus: 1,
  dignissimos: 1,
  doloremque: 1,
  eius: 1,
  enim: 1,
  eum: 1,
  ipsam: 1,
  mollitia: 1,
  optio: 1,
  praesentium: 1,
  provident: 1,
  quasi: 1,
  quo: 1,
  saepe: 1,
  sed: 1,
  suscipit: 1,
  temporibus: 1,
  aperiam: 1,
  laboriosam: 2,
}


test('Word count testing', () => {
  expect(getOpeningCrawlSetWitchCount(testString)).toStrictEqual(expected);
});
