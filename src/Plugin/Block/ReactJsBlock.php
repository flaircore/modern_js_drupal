<?php

namespace Drupal\modern_js_drupal\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactJsBlock' block.
 *
 * @Block(
 *  id = "react_js_block",
 *  admin_label = @Translation("React js block"),
 * )
 */
class ReactJsBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $nid = 0;
    $node = \Drupal::routeMatch()->getParameter('node');
    if ($node instanceof \Drupal\node\NodeInterface) {
      $nid = $node->id();
      $nodeTitle = $node->getTitle();
    }

    return [
      '#theme' => 'react_js_block',
      '#node_title' => $this->t($nodeTitle),
    ];
  }

}
