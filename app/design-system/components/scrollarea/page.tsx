import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import Card from '@/components/ui/Card';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Text } from '@/components/ui/Text';

const ScrollAreaPage = () => (
  <ComponentDocsPageTemplate
    title="Scroll Area"
    githubLink={
      'https://github.com/vesto-fi/vesto-web/blob/develop/src/components/ui/ScrollArea.tsx'
    }
    path="/scrollarea"
  >
    <div className="flex flex-col items-start justify-center px-24 py-48 gap-4">
      <Text className="text-text-secondary" variant="body" size="md">
        The scroll area needs a height (or width if horizontal scroll) to cutt
        off content at
      </Text>
      <div className="flex flex-row items-center justify-center gap-12">
        <Card className="p-8 max-h-[300px] h-[300px]">
          <ScrollArea className="h-full max-h-full">
            <div className="flex flex-col items-center justify-start gap-8">
              <Text variant="headline" size="lg">
                🌮 Birria Tacos
              </Text>
              <Text variant="body" size="sm">
                Tacos, those delightful pockets of joy, have a rich and
                fascinating history that dates back centuries. Originating in
                Mexico, tacos have evolved from humble street food to global
                culinary sensations. The word "taco" actually comes from the
                Spanish word for "plug" or "wad," which makes sense when you
                think about how perfectly they plug the hole in your stomach
                with deliciousness! As for birria, this mouthwatering dish has
                its roots in the state of Jalisco, where it was traditionally
                made with goat meat slow-cooked in a savory and spicy broth.
              </Text>
              <Text variant="body" size="sm">
                Now, let's dive into the juicy details of making birria tacos!
                Picture this: tender meat marinated in a symphony of spices,
                slow-cooked to perfection, and then lovingly tucked into soft
                tortillas. It's like a flavorful hug for your taste buds! The
                secret sauce (literally) lies in the birria method - simmering
                the meat in a rich broth until it's so tender it practically
                melts in your mouth. This process not only infuses the meat with
                incredible flavor but also creates that signature juiciness that
                makes every bite a fiesta in your mouth.
              </Text>
              <Text variant="body" size="sm">
                And let's not forget about the birria sauce! This zesty
                concoction is like the salsa dancing partner to your taco feast.
                Made with ripe tomatoes, aromatic spices, and a whole lot of
                love, this sauce adds a kick of flavor that takes your birria
                tacos to a whole new level of deliciousness. So next time you're
                craving a taste of Mexico, whip up some birria tacos, and
                transport yourself to a fiesta of flavors that will have your
                taste buds doing the salsa! Ole!
              </Text>
            </div>
          </ScrollArea>
        </Card>
        <Card className="p-8 max-h-[300px]">
          <Text
            className="text-text-primary font-mono px-2 py-1 bg-text-primary/20 rounded-md"
            variant="body"
            size="xs"
          >
            {`<ScrollArea type="always">...</ScrollArea>`}
          </Text>
          <ScrollArea className="h-[200px]" type="always">
            <div className="flex flex-col items-center justify-start gap-8">
              <Text variant="headline" size="lg">
                🇷🇺 The Russian Revolution
              </Text>
              <Text variant="body" size="sm">
                The Russian Revolution of 1917 was a pivotal moment in history
                that brought about significant political and social change in
                the Russian Empire. This revolution, consisting of two main
                phases in February and October, led to the overthrow of the
                imperial government and the rise of the Bolsheviks to power. The
                causes of this revolution were deeply rooted in increasing
                governmental corruption, the reactionary policies of Tsar
                Nicholas II, and the severe losses suffered by Russia during
                World War I. The initial phase in February 1917 saw riots erupt
                in Petrograd over food shortages, leading to the abdication of
                Nicholas II as the army joined the rebels. A provisional
                government was established, but it faced opposition from
                powerful workers' soviets advocating for Russian withdrawal from
                the war
              </Text>
              <Text variant="body" size="sm">
                As the revolution progressed, between March and October, the
                provisional government underwent multiple reorganizations, with
                Aleksandr Kerensky assuming leadership in July. However,
                political and military chaos persisted, paving the way for the
                Bolsheviks, under Vladimir Lenin's leadership, to gain support
                among urban workers and soldiers. In October 1917, they staged a
                nearly bloodless coup known as the "October Revolution," seizing
                control of key government buildings and points. Kerensky's
                attempts to resist were futile, leading to his flight from the
                country as a new government composed mainly of Bolsheviks was
                approved by the congress of soviets
              </Text>
              <Text variant="body" size="sm">
                Following these events, Russia transitioned into a new era with
                Lenin's government solidifying its power after three years of
                civil war that ended in 1920. The establishment of the Union of
                Soviet Socialist Republics marked the replacement of Russia's
                traditional monarchy with the world's first Communist state.
                This revolutionary transformation not only reshaped Russia
                internally but also had profound international consequences. The
                Soviet Union's withdrawal from World War I altered global
                dynamics, while its subsequent involvement in supporting
                Communist movements worldwide and its role in defeating Nazi
                Germany during World War II positioned it as a significant
                player on the world stage during the Cold War era
              </Text>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default ScrollAreaPage;
