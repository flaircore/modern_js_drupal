<?php

namespace Drupal\modern_js_drupal\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'VueJsBlock' block.
 *
 * @Block(
 *  id = "vue_js_block",
 *  admin_label = @Translation("Vue js block"),
 * )
 */
class VueJsBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {


    $nid = 0;
    $node = \Drupal::routeMatch()->getParameter('node');
    if ($node instanceof \Drupal\node\NodeInterface) {
      $nid = $node->id();
      $title = $node->getTitle();
    }

    return [
      '#theme' => 'vue_js_block',
      'title' => t('Vue js and Node title'),
      '#attached' => [
        'library' => [
          'modern_js_drupal/vue_local'
        ],
      ],
    ];
  }

}
