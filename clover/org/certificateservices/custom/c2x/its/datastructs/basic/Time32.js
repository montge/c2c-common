var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":136,"id":1794,"methods":[{"el":56,"sc":2,"sl":51},{"el":65,"sc":2,"sl":63},{"el":74,"sc":2,"sl":71},{"el":85,"sc":2,"sl":82},{"el":93,"sc":2,"sl":91},{"el":99,"sc":2,"sl":96},{"el":106,"sc":2,"sl":101},{"el":111,"sc":2,"sl":108},{"el":119,"sc":2,"sl":113},{"el":133,"sc":2,"sl":121}],"name":"Time32","sl":38}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_1":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_119":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_121":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_123":{"methods":[{"sl":96}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":98}]},"test_124":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_125":{"methods":[{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":110}]},"test_134":{"methods":[{"sl":71},{"sl":82},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":103},{"sl":104},{"sl":105}]},"test_14":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_142":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_148":{"methods":[{"sl":71},{"sl":101}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_150":{"methods":[{"sl":51},{"sl":96}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":98}]},"test_151":{"methods":[{"sl":51}],"name":"Verify that findHeader finds the correct header in a SecureMessage","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_155":{"methods":[{"sl":71},{"sl":82},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":103},{"sl":104},{"sl":105}]},"test_162":{"methods":[{"sl":51},{"sl":96}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":98}]},"test_171":{"methods":[{"sl":51}],"name":"Verify that addHeader adds the header value in correct order","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_188":{"methods":[{"sl":51},{"sl":113},{"sl":121}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":129},{"sl":130},{"sl":132}]},"test_20":{"methods":[{"sl":96}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":98}]},"test_203":{"methods":[{"sl":96}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":98}]},"test_207":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_216":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_229":{"methods":[{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":110}]},"test_231":{"methods":[{"sl":71},{"sl":101}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_252":{"methods":[{"sl":71},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_265":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_266":{"methods":[{"sl":71},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_270":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_28":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_288":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_289":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_290":{"methods":[{"sl":63},{"sl":82}],"name":"Make sure asDate converts the date correctly","pass":true,"statements":[{"sl":64},{"sl":83},{"sl":84}]},"test_296":{"methods":[{"sl":51},{"sl":96}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":98}]},"test_327":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_341":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_345":{"methods":[{"sl":51},{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":110}]},"test_350":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_357":{"methods":[{"sl":51},{"sl":91}],"name":"Verify the constructors and asElapsedTime","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":92}]},"test_374":{"methods":[{"sl":82}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":83},{"sl":84}]},"test_379":{"methods":[{"sl":51},{"sl":113},{"sl":121}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":123},{"sl":125},{"sl":127},{"sl":129},{"sl":130},{"sl":131},{"sl":132}]},"test_387":{"methods":[{"sl":96}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":98}]},"test_394":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_395":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_399":{"methods":[{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":110}]},"test_47":{"methods":[{"sl":63},{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":64},{"sl":98}]},"test_49":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_50":{"methods":[{"sl":71},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_56":{"methods":[{"sl":71},{"sl":101}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_57":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_71":{"methods":[{"sl":63},{"sl":96}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":64},{"sl":98}]},"test_80":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_82":{"methods":[{"sl":96}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":98}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [288, 395, 345, 171, 379, 188, 207, 162, 1, 216, 80, 121, 357, 151, 296, 341, 394, 150, 49], [288, 395, 345, 171, 379, 188, 207, 162, 1, 216, 80, 121, 357, 151, 296, 341, 394, 150, 49], [288, 395, 345, 171, 379, 188, 207, 162, 1, 216, 80, 121, 357, 151, 296, 341, 394, 150, 49], [288, 395, 345, 171, 379, 188, 207, 162, 1, 216, 80, 121, 357, 151, 296, 341, 394, 150, 49], [], [], [], [], [], [], [], [], [47, 71, 290], [47, 71, 290], [], [], [], [], [], [], [266, 289, 252, 148, 57, 56, 231, 50, 350, 134, 119, 265, 0, 14, 124, 155], [], [], [], [], [], [], [], [], [], [], [288, 399, 395, 345, 229, 125, 207, 134, 1, 216, 80, 121, 374, 341, 290, 394, 155, 49], [288, 399, 395, 345, 229, 125, 207, 134, 1, 216, 80, 121, 374, 341, 290, 394, 155, 49], [288, 399, 395, 345, 229, 125, 207, 134, 1, 216, 80, 121, 374, 341, 290, 394, 155, 49], [], [], [], [], [], [], [357], [357], [], [], [], [288, 123, 395, 289, 327, 57, 203, 387, 47, 207, 350, 162, 71, 119, 1, 82, 270, 265, 216, 80, 0, 20, 121, 142, 14, 28, 296, 124, 341, 394, 150, 49], [], [288, 123, 395, 289, 327, 57, 203, 387, 47, 207, 350, 162, 71, 119, 1, 82, 270, 265, 216, 80, 0, 20, 121, 142, 14, 28, 296, 124, 341, 394, 150, 49], [], [], [266, 289, 252, 148, 57, 56, 231, 50, 350, 134, 119, 265, 0, 14, 124, 155], [], [266, 289, 252, 148, 57, 56, 231, 50, 350, 134, 119, 265, 0, 14, 124, 155], [266, 289, 252, 148, 57, 56, 231, 50, 350, 134, 119, 265, 0, 14, 124, 155], [266, 289, 252, 148, 57, 56, 231, 50, 350, 134, 119, 265, 0, 14, 124, 155], [], [], [399, 345, 229, 125], [], [399, 345, 229, 125], [], [], [379, 188], [], [379, 188], [379, 188], [379, 188], [379, 188], [], [], [379, 188], [], [379, 188], [], [379, 188], [188], [379, 188], [], [379, 188], [379, 188], [379], [379, 188], [], [], [], []]