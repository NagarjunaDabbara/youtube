import youtubePlaylist from "../pages/youtubePlaylist";
before(() => {
    youtubePlaylist.navigate(`/`)
})

describe("Testing functionalities of companyRegistration", () => {
 it("checks if an error is shown when user tries to login with invalid credentials", () => {
    youtubePlaylist.enterLoginDetails()
})
})