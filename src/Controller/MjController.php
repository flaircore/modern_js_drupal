<?php

namespace Drupal\modern_js_drupal\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides a route response for the modern_js_drupal module.
 */
class MjController extends ControllerBase {

  /**
   * Returns the /modern-js-drupal page.
   *
   * @return array
   *   A simple render array.
   */
  public function show() {
    $markup = '<div> <h1>React on a Controller!</h1><div id="react-controller"></div> </div>';
    return [
      '#markup' => $markup,
      '#attached' => [
        'library' => 'modern_js_drupal/react_controller',
      ],
    ];
  }

}
