const leanTermsList = [
    {term: '6s' , answer: 'study, sort, set in order, standardize, and sustain'}, 
    {term: 'A3 report', answer: 'A problem solving tool named after the international paper size (A3) approximately 11x17. Developed to fit on this size of paper as a guide to keep all steps as concise as possible. You’re not working on the root cause of the problem if you can’t fit on this size sheet.'},
     {term: 'Andon', answer: 'A visual light used to show the current status of a machine or process.'}, 
     {term: 'Autonomation', answer: 'English word for jidoka is autonomation, based on autonomous and automation. Others call it intelligent automation, and again others describe it as automation with a human touch.'},
      {term: 'Current State', answer: 'Current condition of anything. How something is currently being done.'},
      {term: 'Cycle Time', answer: 'The time it takes a product to be built or moved within its process (“The process” is typically defined as the smallest reasonable timed event). There is no speed limit for cycle time, it may be readily improved upon, but must be sustainable, not a singular event.'},
      {term: 'Defects', answer: 'Waste of inspection, repair, and scrapping of material to which value has already been added.'},
      {term: 'FIFO', answer: 'First in, first out.'},
      {term: 'Five Whys', answer: 'Asking five why questions to get to the root cause of a problem.'},
      {term: 'Flow', answer: 'Move or process in a forward motion.'},
      {term: 'Future state', answer: 'The condition we imagine something can be in once changes have taken place.'},
      {term: 'Gemba', answer: '“The real place” the place where work occurs.'},
      {term: 'Genchi Gembutsu', answer: '“Go and see.” Go to the real source for first-hand knowledge. Immerse yourself in the process at the gemba to get full comprehension before making decisions.'},
      {term: 'Hai', answer: ' “I accept the challenge.”'},
      {term: 'Hansei', answer: ' “Reflection”. Reflect on what went right or what went wrong. Make changes if needed and try something else.'},
      {term: 'Heijunka', answer: 'A process to help manage production by leveling peaks and valleys of customer demand.'},
      {term: 'Hoshin Kanri', answer: 'A method for ensuring that the strategic goals of a company drive progress and action at every level within that company. This eliminates the waste that comes from inconsistent direction and poor communication. We use publicly declared goals on our Hoshin Kanri Boards.'},
      {term: 'Jidoka', answer: 'The concept of stopping the process automatically if there are problems or abnormalities. “Autonomation”.'},
      {term: 'JIT (Just In Time)', answer: 'Product delivered to customer or next process at exactly the moment they need it. Not one moment too soon, not moment too late.'},
      {term: 'Kaizen', answer: 'Many small changes for the better, created by the people that do the work.'},
      {term: 'Kanban', answer: 'A visual system that shows you to replace what has been consumed.'},
      {term: 'Kata', answer: 'The practice of kata, is the act of practicing a pattern so it becomes second nature. Having a shared understanding of how you want to improve. (Our kata, the In the ditch way)'},
      {term: 'KPI: (Key Performance Indicators)', answer: 'These are ways to measure if we are winning or losing by monitoring performance objectives.'},
      {term: 'Lean', answer: 'Creating value by minimizing waste. Lean is centered on making obvious what adds value by reducing everything else. "Value" is any action or process that a customer would be willing to pay for.'},
      {term: 'Muda', answer: 'Waste any step or process that does not add value in the eyes of the customer.'},
      {term: 'Over-production', answer: 'Waste of making too much, too soon, too fast compared to the needs of the next process. Considered one of the worst wastes of company profits.'},
      {term: 'PDCA (Plan-Do-Check-Act)', answer: 'A problem-solving method that leads you through continuous improvement cycles.'},
      {term: 'Poka-yoke', answer: 'Device or procedure designed to help prevent the generation of most defects.'},
      {term: 'Push system', answer: 'Building products that you have no customer for and trying to push those products onto the customer or next process.'},
      {term: 'Pull system', answer: 'Building products at the pull of the customer; only building exactly what the customer wants, when they want it.'},
      {term: '“Pull the rope”', answer: 'To stop a machine or process any time a problem occurs.'},
      {term: 'Red team', answer: 'A team of people from various departments well versed in lean problem-solving techniques that people can call to help coach and mentor them through solving their problem within the company. They have the ability to get things done.'},
      {term: 'Socratic method', answer: 'Asking questions to stimulate critical thinking and to illuminate ideas.'},
      {term: 'Shadow board', answer: 'Location for tools which the tools location is clearly defined by the shadow of the tool.'},
      {term: 'Shu Ha Ri', answer: 'Learning cycle to master a skill of a skill of a process.'},
      {term: 'Shu', answer: '"Follow our Processes and Protect Our Kata" Novice Learning fundamentals and techniques with help from a mentor.'},
      {term: 'Ha', answer: '"Break Away" Proficient Able to perform at a high level without the need of a mentor.'},
      {term: 'Ri', answer: '"Freedom to Create" Master Mastery of our kata to the point where you become the mentor.'},
      {term: 'Stakeholder', answer: 'Anyone who relies on the company. Such as a supplier, customer, communities, and employees.'},
      {term: 'Supermarket', answer: 'Area where items are stored in a defined, dedicated place and are continually replaced.'},
      {term: 'Value added', answer: 'Anything that adds value in the eyes of the customer. Something that the customer would be willing to pay more for.'},
      {term: '"T" type leader', answer: 'A “T” type leader grows like a tree. It starts with the roots. You gain deep-rooted understanding and experience in your Gemba (the long stem of the “t”). Then you will broaden your leadership skills by branching out to gain exposure across departments and sometimes even the entire organization (the top horizontal part of the “T”). Group leaders must be “T” type leaders.'},
      {term: 'Takt time:', answer: 'The rate at which product should be produced to satisfy customer and company needs. Takt time is a governor of time. Building faster than the takt time is overproduction and should be avoided. Takt time should only be changed by a group decision.'},
      {term: 'Teach and learn', answer: 'As you teach someone, they then have an obligation in our organization to teach others. Teach and learn, learn and teach. We want to teach the world it is a part of our very core.'},
      {term: 'Theory of constraints (TOC)', answer: 'Approach to capacity improvement by focusing on improving the constraint or bottleneck.'},
      {term: 'Toyota production system (TPS)', answer: 'A manufacturing strategy developed by Toyota motor corporation of Japan over a period of many years. TPS focuses on the complete elimination of waste from the manufacturing process.'},
      {term: 'Value stream mapping', answer: 'A tool used to visually map the flow of production. Shows the current and future state of processes in a way that highlights opportunities for improvement.'},
      {term: 'WIP', answer: 'Work in process - adding value to the product that the customer is not willing to pay for yet.'},
];

const eightWastesList= [
    {term: '1. Overproduction', answer: 'To produce sooner, faster, or in greater quantities than customer demands.'},
    {term: '2. Inventory', answer: 'Raw material, work in process, or finished goods which is not having value added to it.'},
    {term: '3. Waiting', answer: 'People or parts that wait for a work cycle to be completed.'},
    {term: '4. Motion', answer: 'Unnecessary movement of people, parts or machines within a process.'},
    {term: '5. Transportation', answer: 'Unnecessary movement of people or parts between processes.'},
    {term: '6. Defects:', answer: 'Not right the first time. Repetition or correction of a process. Scrap, rework and defects.'},
    {term: '7. Over Processing', answer: 'Processing beyond the standard required by the customer.'},
    {term: '8. Talent', answer: 'Underutilizing people’s talents, skills, and knowledge.'},
];

const customList = [
    {term: '', answer: ''},
];