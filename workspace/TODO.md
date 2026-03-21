<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<todo id="virtual-tour">
Add Virtual Campus Tour
Embed a 360° or video campus tour on click of the "SGVU CAMPUS TOUR" badge in the Education Experience section
</todo>

<todo id="chatbot">
Add Admissions Chatbot Widget
Floating chat button that opens a simple FAQ bot — answers common questions about fees, programs, and deadlines
</todo>

<todo id="counter-animation">
Animate Stats Counters
Use IntersectionObserver to trigger number count-up animations on the Stats section (40K+, 10K+, etc.)
</todo>

<todo id="seo-meta">
Add SEO Meta Tags
Add Open Graph, description, and title meta tags in index.html for better search visibility
</todo>

<todo id="mobile-form">
Improve Mobile Hero Form
Currently the form stacks below hero text on mobile — consider a floating "Apply Now" CTA that opens a modal on mobile for better UX
</todo>
