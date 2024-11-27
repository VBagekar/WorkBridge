// Simulated database for checking existing email and phone
const existingUsers = [
    { email: "user1@example.com", phone: "+911234567890" },
    { email: "user2@example.com", phone: "+910987654321" },
  ];
  
  // Function to fetch city, state, and district using a pincode API
  async function fetchLocationDetails(pincode) {
    const apiUrl = `https://api.zippopotam.us${pincode}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data[0].Status === "Success") {
        const location = data[0].PostOffice[0];
        return {
          city: location.Name,
          district: location.District,
          state: location.State,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
      return null;
    }
  }
  
  // Form submission handling
  document.getElementById("profileForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const streetAddress = document.getElementById("streetAddress").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const emailUpdates = document.getElementById("emailUpdates").checked;
  
    // Check for valid phone format
    if (!phone.startsWith("+91") || phone.length !== 13) {
      alert("Phone number must start with +91 and be 13 characters long.");
      return;
    }
  
    // Check for duplicate email or phone
    const isDuplicate = existingUsers.some(
      (user) => user.email === email || user.phone === phone
    );
    if (isDuplicate) {
      alert("Error: Email or phone number already exists.");
      return;
    }
  
    // Fetch location details
    const locationDetails = await fetchLocationDetails(pincode);
    if (locationDetails) {
      document.getElementById("city").value = locationDetails.city;
      document.getElementById("district").value = locationDetails.district;
      document.getElementById("state").value = locationDetails.state;
    } else {
      alert("Invalid pincode. Could not fetch location details.");
      return;
    }
  
    // Add new user to the simulated database
    existingUsers.push({ email, phone });
  
    // Show profile update success message
    alert(`Profile Updated Successfully!
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    DOB: ${dob}
    Street Address: ${streetAddress}
    Pincode: ${pincode}
    City: ${locationDetails.city}
    District: ${locationDetails.district}
    State: ${locationDetails.state}
    Country: India
    Updates on Email: ${emailUpdates ? "Yes" : "No"}`);
  });
  