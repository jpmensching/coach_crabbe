angular.module('CoachCrabbe.services', [])

/**
 * Stores constants.
 */
.factory('Constants', function() {
  return {
    angerLevels: {
      'annoyed': 1,
      'irritated': 2,
      'mad': 3,
      'livid': 4,
      'furious': 5
    }
  }
});
