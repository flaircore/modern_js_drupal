<?php

namespace Drupal\modern_js_drupal\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactJsBlock' block.
 *
 * @Block(
 *   id = "react_js_block",
 *   admin_label = @Translation("React js block"),
 *   category = @Translation("Modern Js Drupal"),
 * )
 */
class ReactJsBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $markup = '<div> <h1>React on a Block</h1><div id="react-block"></div> </div>';
    return [
      '#markup' => $markup,
      '#attached' => [
        'library' => 'modern_js_drupal/react_block',
      ],
    ];
  }

}
