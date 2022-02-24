import youtubeSingleVideo from "../pages/youtubeSingleVideo";
before(() => {
    youtubeSingleVideo.navigate(`/`)
})

describe("Testing functionalities of companyRegistration", () => {
 it("checks if an error is shown when user tries to login with invalid credentials", () => {
    youtubeSingleVideo.enterLoginDetails()
})
})