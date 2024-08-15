class Tweet {
    constructor(tweetElement) {
      this.tweetElement = tweetElement;
      this.retweetsElement = tweetElement.querySelector('.retweets');
      this.commentsElement = tweetElement.querySelector('.comments');
      this.likesElement = tweetElement.querySelector('.likes');
      this.likeButton = tweetElement.querySelector('.like-button');
      this.shareButton = tweetElement.querySelector('.share-button');
      
      this.init();
    }

    init() {
      this.retweetsElement.innerText = this.formatNumber(this.getRandomNumberRetweet());
      this.commentsElement.innerText = this.formatNumber(this.getRandomNumberComment());
      this.likesElement.innerText = this.formatNumber(this.getRandomNumberLikes());

      this.likeButton.addEventListener('click', () => {
        this.likeButton.classList.toggle('liked');
      });

      this.shareButton.addEventListener('click', () => {
        const tweetId = this.tweetElement.id;
        const tweetUrl = `https://yourwebsite.com/tweet/#${tweetId}`;
        const subject = 'Check out this about Jenny Lind!';
        const body = `Check out this tweet: ${tweetUrl}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    }

    getRandomNumberRetweet() {
      return Math.floor(Math.random() * 100000) + 1;
    }
    getRandomNumberComment() {
      return Math.floor(Math.random() * 100000) + 1;
    }
    getRandomNumberLikes() {
      return Math.floor(Math.random() * 1000000) + 1;
    }

    formatNumber(num) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
      return num;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tweets = document.querySelectorAll('.tweet');
    tweets.forEach(tweetElement => new Tweet(tweetElement));
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Check the local storage for dark mode setting
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';

    // If dark mode was enabled previously, apply the dark mode
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Update local storage based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}
document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.icon');
    if (icon.classList.contains('far')) {
      icon.classList.remove('far');
      icon.classList.add('fas');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('.tooltip-button'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl, {
        title: 'Per E-mail teilen',
        placement: 'top',
        customClass: 'custom-tooltip'
      });
    });
  });
