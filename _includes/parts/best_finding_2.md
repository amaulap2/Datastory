# Type-2 Bot Analysis

### Is there a correlation between the number of days of suspicious activity and the lifetime of an account?

First, it’s important to define what we mean by *lifetime*. The definition we choose plays a crucial role, as it can provide us with different insights into user behavior.

## 1. Lifetime of Bots

<div style="text-align: center;" id="Figure1">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/best_finding_2/violin_plots_lifetime.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Violin plot of the 3 definitions of lifetime</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>


We explored the **lifetime of bots** using three different calculations to understand how long they are active and to derive meaningful insights about their behavior. Below is an explanation of each approach.


### 1.1 First day of commenting – Last day of commenting
- **Definition**: The time between the very first day a bot left a comment (whether suspicious or not) and the last day it left a comment.
- **Relevance**: This calculation gives a general estimate of the bot's total commenting activity span. It includes both suspicious and normal behavior.
- **Insights**:
   - Short lifetimes may suggest bots are used for targeted campaigns or events.
   - Long lifetimes do not provide definitive conclusions, only broad assumptions can be made, but an interesting possibility is that some bots may attempt to mimic human-like behavior.

<div style="text-align: center;" id="lifetime_1">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/violin_lifetime_1.png" alt="Local Image">
  <p>Violinplot for definition 1.</p>
</div>

### 1.2 First day of commenting suspiciously – Last day of commenting suspiciously
- **Definition**: The time between the first and last day the bot's commenting activity was flagged as suspicious.
- **Relevance**: This metric focuses **only on suspicious activity**. It shows how long bots actively engage in behaviors deemed abnormal.
- **Insights**:
   - A short suspicious lifetime suggests bots may be detected quickly and neutralized or that they have been used for targeted campaings
   - A longer suspicious lifetime may indicate gaps in detection systems, allowing bots to remain active for extended periods.

<div style="text-align: center;" id="lifetime_2">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/violin_lifetime_2.png" alt="Local Image">
  <p>Violinplot for definition 2.</p>
</div>

### 1.3 First day of commenting suspiciously – Last day of commenting
- **Definition**: The time between the first day the bot was flagged as suspicious and the last day it left any comment (suspicious or not).
- **Relevance**: This approach captures one-time or isolated suspicious activities
- **Insights**:
   - A long gap between suspicious activity and the last comment suggests bots might adapt their behavior to avoid detection.Alternatively, it might suggest that a regular person displayed suspicious behavior once, either due to hacking or simply because occasional suspicious activity can occur.
   - If the last comment closely follows suspicious activity, bots may be designed for short bursts of commenting or have been neutralized.

<div style="text-align: center;" id="lifetime_3">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/violin_lifetime_3.png" alt="Local Image">
  <p>Violinplot for definition 3.</p>
</div>


<p>At first glance, the <a href="#lifetime_1">violin plot 1</a> doesn’t give us much to work with. It’s hard to tell normal users apart from suspicious ones because their distributions look almost identical. But when we move to the <a href="#lifetime_2">plot</a> for the second definition, things start to shift. Suspicious users clearly have much shorter lifetimes, which aligns with what we’d expect — bot accounts usually don’t stick around for long. This doesn’t give us a definitive answer, but it hints at possible reasons, like YouTube’s algorithm catching them quickly or bots being deployed for short-term campaigns. Finally, the <a href="#lifetime_3">plot</a> strikes a better balance, showing that most suspicious accounts stop commenting right after their first suspicious activity. Interestingly, some accounts live on for 4000 or even 5000 days. This could be because the accounts were hacked to operate as bots and then reclaimed by their original owners, going back to behaving like normal users.</p>

Now that we've clearly defined different lifetime. Let's look at our question previous question : 


### Is there a correlation between the number of days of suspicious activity and the lifetime of an account?


<div style="text-align: center;" id="correlation_1">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_1.png" alt="Local Image">
  <p>Correlation with first definition.</p>
</div>

With the first definition, we can see on the <a href="#correlation_1">correlation graph</a> that there is no clear correlation. Moreover the Pearson coefficient is about 0.07 and Spearman about 0.14. Therefore, it’s safe to say that this first definition doesn’t provide any useful insights or meaningful information.


<div style="text-align: center;" id="correlation_2">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_2.png" alt="Local Image">
  <p>Correlation with second definition.</p>
</div>

Next, with a Pearson correlation of 0.35 and a Spearman correlation of 0.92, combined with what we observe on the <a href="#correlation_2">correlation graph</a>, we can clearly conclude that there is a correlation between the active days and lifetime. If we recall, lifetime here is defined as the number of days between the first and last days of suspicious activity.This finding is highly likely to be indicative of bot-like behavior. It suggests that the longer the lifetime of an account, the more suspicious days it accumulates, implying a consistent pattern of suspicious activity. On the other hand, a shorter lifetime could indicate strategic bot usage, possibly targeting a specific event or time period, which aligns with the behavior of bots designed for short-term, focused activities.


<div style="text-align: center;" id="correlation_3">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_3.png" alt="Local Image">
  <p>Correlation with third definition</p>
</div>

Here the third <a href="#correlation_3">correlation graph</a> doesn't seem to give that much information moreover the Pearson and Spearman coefficient are relatively small. Nothing seems to emerge from here...

<div style="text-align: center;" id="correlation_4">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_4.png" alt="Local Image">
  <p>Correlation with number of videos commented</p>
</div>


Lastly, the <a href="#correlation_4">correlation plot</a> reveals that the more suspicious days an account has, the more videos it has commented on. This is quite intuitive and aligns with our expectations. In fact, one might have expected an even stronger correlation between these two variables. However, this relatively moderate correlation suggests that some accounts can comment on a large number of videos within a short time frame, without needing to spread their activity over multiple days. This points to the possibility that the relationship between suspicious days and commenting activity may not be as tightly linked as initially assumed.



<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
  <!-- First figure -->
  <div style="flex: 1 0 45%; text-align: center; margin-bottom: 20px;" id="Figure1">
    <figure>
      <iframe src="{{ site.baseurl }}/assets/data/best_finding_2/corr_LT1_sus_days.html" 
              width="100%" 
              height="500" 
              style="border:none;">
      </iframe>
      <center>
        <figcaption>
          <p style="margin-top:-0.6cm;margin-left:0.2cm;">
            <font size="2">Correlation with the first definition of lifetime</font>
          </p>
        </figcaption>
      </center>
    </figure>
  </div>

  <!-- Second figure -->
  <div style="flex: 1 0 45%; text-align: center; margin-bottom: 20px;" id="Figure2">
    <figure>
      <iframe src="{{ site.baseurl }}/assets/data/best_finding_2/corr_LT2_sus_days.html" 
              width="100%" 
              height="500" 
              style="border:none;">
      </iframe>
      <center>
        <figcaption>
          <p style="margin-top:-0.6cm;margin-left:0.2cm;">
            <font size="2">Correlation with the second definition of lifetime</font>
          </p>
        </figcaption>
      </center>
    </figure>
  </div>

  <!-- Third figure -->
  <div style="flex: 1 0 45%; text-align: center; margin-bottom: 20px;" id="Figure3">
    <figure>
      <iframe src="{{ site.baseurl }}/assets/data/best_finding_2/corr_LT3_sus_days.html" 
              width="100%" 
              height="500" 
              style="border:none;">
      </iframe>
      <center>
        <figcaption>
          <p style="margin-top:-0.6cm;margin-left:0.2cm;">
            <font size="2">Correlation with the third definition of lifetime</font>
          </p>
        </figcaption>
      </center>
    </figure>
  </div>

  <!-- Fourth figure -->
  <div style="flex: 1 0 45%; text-align: center; margin-bottom: 20px;" id="Figure4">
    <figure>
      <iframe src="{{ site.baseurl }}/assets/data/best_finding_2/corr_vid_com_sus_days.html" 
              width="100%" 
              height="500" 
              style="border:none;">
      </iframe>
      <center>
        <figcaption>
          <p style="margin-top:-0.6cm;margin-left:0.2cm;">
            <font size="2">Correlation with number of videos commented</font>
          </p>
        </figcaption>
      </center>
    </figure>
  </div>
</div>
