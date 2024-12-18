# Type-2 Bot Analysis
# Best finding 2

### Is there a correlation between the number of days os suspicious activity and the lifetime of an account ?

First, it is important to define what do we call lifetime. And we'll see that the definition is important and gives different insights.

## 1. Lifetime of Bots

We explored the **lifetime of bots** using three different calculations to understand their activity duration and derive meaningful insights about their behavior. Below is an explanation of each approach.

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


<p>It is evident that the first definition does not provide clear insights. Looking at the <a href="#lifetime_1">violin plot 1</a>, it is not possible to distinguish between normal users and suspicious ones, as both distributions appear the same. On the other hand, the <a href="#lifetime_2">plot</a> for the second definition shows a noticeable shift, where suspicious users have significantly shorter lifetimes. Finally, a more balanced <a href="#lifetime_3">plot</a> reveals that most suspicious accounts stop commenting after their first suspicious activity, although some accounts can remain active for up to 4000 or 5000 days. This could be explained by accounts being hacked to use bots, then later reclaimed by the original users, continuing to behave like normal users.</p>



<div style="text-align: center;" id="lifetime_3">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_1.png" alt="Local Image">
  <p>Violinplot for definition 3.</p>
</div>

<div style="text-align: center;" id="lifetime_3">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_2.png" alt="Local Image">
  <p>Violinplot for definition 3.</p>
</div>

<div style="text-align: center;" id="lifetime_3">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_3.png" alt="Local Image">
  <p>Violinplot for definition 3.</p>
</div>

<div style="text-align: center;" id="lifetime_3">
  <img src="{{ site.baseurl }}/assets/data/best_finding_2/correlation_4.png" alt="Local Image">
  <p>Violinplot for definition 3.</p>
</div>