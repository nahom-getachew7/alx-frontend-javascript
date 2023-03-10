export function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  }
  
  
  export function createUser() {
    return Promise.resolve({
      firstName: 'Mubaraq',
      lastName: 'Payne',
    });
  }
