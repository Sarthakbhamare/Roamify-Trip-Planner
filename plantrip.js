document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const addItemBtn = document.getElementById("add-itinerary");
  const itineraryList = document.getElementById("itinerary-list");
  const groupCollabBtn = document.getElementById("group-collab-btn");
  const collaborationModal = document.getElementById("group-collab-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const searchInput = document.getElementById("friend-search");
  const friendsList = document.getElementById("friends-list");
  const chatSection = document.getElementById("chat-section");
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendChatBtn = document.getElementById("send-chat");
  const friendsDropdown = document.getElementById("friend-dropdown");
  const selectFriendBtn = document.getElementById("select-friend");

  // Add items to the itinerary
  addItemBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent page refresh

    const destination = document.getElementById("destination").value;
    const activity = document.getElementById("activity").value;
    const transport = document.getElementById("transport").value;
    const accommodation = document.getElementById("accommodation").value;

    if (!destination || !activity || !transport || !accommodation) {
      alert("Please fill out all fields before adding to the itinerary.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${destination} - ${activity} via ${transport}, staying at ${accommodation}`;
    itineraryList.appendChild(listItem);
    

    alert("Itinerary item added successfully!");
  });
  // Sample friends list for chat functionality
  const sampleFriends = ["Sarthak", "Priyanka", "Bhavika", "the third person", "Eve", "Frank"];

  // Predefined replies for specific friends
  const predefinedReplies = {
    "Sarthak": {
      "hii": "Hey! How's it going?",
      "lets plan a trip": "Sure! Any place in mind?",
      "any ideas for dinner": "I could go for some pasta. What about you?"
    },
    "Priyanka": {
      "hii": "Hi there! What's new?",
      "lets plan a trip": "Sounds fun! Where are we headed?",
      "any ideas for dinner": "Pizza sounds great! Want to try that new place?"
    },
    "Default": {
      "hii": "Hello! How's everyone doing?",
      "lets plan a trip": "Where should we plan to go?",
      "any ideas for dinner": "How about pizza? It's always a hit!"
    }
  };

  let selectedFriend = "Priyanka"; // Default friend for replies

  // Function to send messages
  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addChatMessage(`You: ${message}`);
    chatInput.value = ""; // Clear input field

    // Get replies specific to the selected friend
    const friendReplies = predefinedReplies[selectedFriend] || predefinedReplies["Default"];
    const reply = friendReplies[message.toLowerCase()];
    if (reply) {
      setTimeout(() => {
        addChatMessage(`${selectedFriend}: ${reply}`);
      }, 1000); // Simulate reply delay
    } else {
      setTimeout(() => {
        addChatMessage(`${selectedFriend}: Sounds good!`);
      }, 1000); // Default reply
    }
  }

  // Event listener for send button
  sendChatBtn.addEventListener("click", sendMessage);

  // Event listener for Enter key
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // Function to add chat messages to the chatbox
  function addChatMessage(message, system = false) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = system ? "system-message" : "user-message";
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
  }

  // Initial setup for the group chat
  groupCollabBtn.addEventListener("click", () => {
    collaborationModal.classList.remove("hidden");
    chatSection.classList.remove("hidden");
    addChatMessage("System: Welcome to the group chat!", true);
  });

  // Close the collaboration modal
  closeModalBtn.addEventListener("click", () => {
    collaborationModal.classList.add("hidden");
  });

  // Populate friends dropdown and handle selection
  sampleFriends.forEach(friend => {
    const option = document.createElement("option");
    option.value = friend;
    option.textContent = friend;
    friendsDropdown.appendChild(option);
  });

  selectFriendBtn.addEventListener("click", () => {
    selectedFriend = friendsDropdown.value;
    if (!selectedFriend) {
      alert("Please select a friend from the dropdown.");
      return;
    }
    chatSection.classList.remove("hidden");
    addChatMessage(`System: You are now chatting with ${selectedFriend}.`, true);
  });

  // Friend search functionality
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    friendsList.innerHTML = ""; // Clear previous results

    const filteredFriends = sampleFriends.filter(friend =>
      friend.toLowerCase().includes(query)
    );

    filteredFriends.forEach(friend => {
      const friendItem = document.createElement("div");
      friendItem.textContent = friend;
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add";
      addBtn.addEventListener("click", () => {
        alert(`${friend} has been added to the collaboration!`);
        const message = `System: ${friend} has joined the collaboration.`;
        addChatMessage(message, true);
      });
      friendItem.appendChild(addBtn);
      friendsList.appendChild(friendItem);
    });
  });
})