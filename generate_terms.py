import os
import base64
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_pdf():
    pdf_path = "terms_updated.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )
    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=1,
        textColor=colors.HexColor('#0D1B2A'),
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=10,
        leading=14,
        alignment=1,
        textColor=colors.HexColor('#637282'),
        spaceAfter=18
    )

    h1_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#1E56A0'),
        spaceBefore=12,
        spaceAfter=5
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#1F2937'),
        spaceAfter=6
    )

    story = []

    # PAGE 1
    story.append(Paragraph("Stars, Stripes &amp; Wild India", title_style))
    story.append(Paragraph("Terms and Conditions — April 5–14, 2027 | Pench National Park &amp; Tadoba-Andhari Tiger Reserve", subtitle_style))

    story.append(Paragraph("1. About These Terms", h1_style))
    story.append(Paragraph("These Terms and Conditions (&quot;Terms&quot;) govern your booking and participation in the &quot;Stars, Stripes &amp; Wild India&quot; photography expedition (the &quot;Trip&quot;). The Trip is organized and co-directed by P S Srinivas and Himanshu Bagde (the &quot;Organizers,&quot; &quot;we,&quot; &quot;us&quot;), joined in Pench by astrophotography expert Abhishek Pawse. The Organizers and Abhishek Pawse are together referred to in these Terms as the &quot;Trip Leaders.&quot; By submitting a deposit or otherwise confirming a booking, you (&quot;Guest,&quot; &quot;you&quot;) agree to be bound by these Terms.", body_style))

    story.append(Paragraph("2. The Trip", h1_style))
    story.append(Paragraph("<b>2.1 Dates:</b> April 5–14, 2027 (9 nights, 10 days).", body_style))
    story.append(Paragraph("<b>2.2 Itinerary:</b> Four nights at Pench National Park and five nights at Tadoba-Andhari Tiger Reserve, as described in the itinerary provided to you at booking. The itinerary is indicative and subject to change as set out in Section 5.", body_style))
    story.append(Paragraph("<b>2.3 Group size:</b> limited to a maximum of 8 Guests.", body_style))
    story.append(Paragraph("<b>2.4 Trip leaders:</b> Himanshu Bagde and P S Srinivas, co-directors present throughout the Trip, joined in Pench by Abhishek Pawse as astrophotography expert for four nights of dark-sky sessions.", body_style))
    story.append(Paragraph("<b>2.5 Minimum age:</b> this Trip is open to Guests aged 18 and over at the time of departure. No minors can be accepted on this Trip.", body_style))

    story.append(Paragraph("3. Booking and Payment", h1_style))
    story.append(Paragraph("<b>3.1</b> A booking is confirmed on receipt of a non-refundable deposit of US$ 2,000 per person.", body_style))
    story.append(Paragraph("<b>3.2</b> The remaining balance (US$ 4,900 double occupancy; add US$ 1,500 for single) is due no later than 7 days after the Organizers confirm under Section 5.1 that the Trip will proceed (the &quot;Balance Due Date&quot;), and in any event no later than November 8, 2026.", body_style))
    story.append(Paragraph("<b>3.3</b> Bookings made on or after November 9, 2026, where space permits, require full payment at the time of booking.", body_style))
    story.append(Paragraph("<b>3.4</b> All payments are to be made in US Dollars by Zelle, Venmo, PayPal, credit card, or bank transfer, to P S Srinivas as an individual, in his capacity as co-director, and not to a corporate entity; account details will be provided at the time of confirmation of participation. If any of the above payment methods charge a fee, that fee shall be borne in full by the Guest. The amounts stated in these Terms are net amounts due to the Organizers, after all transaction costs and transfer fees.", body_style))
    story.append(Paragraph("<b>3.5</b> Failure to pay the balance by the due date may, at the Organizers’ discretion, result in cancellation of the booking and forfeiture of the deposit paid.", body_style))
    story.append(Paragraph("<b>3.6</b> Where two or more Guests book together (for example, as a couple or as friends traveling jointly), each Guest is jointly and severally liable for the full cost of that booking, including deposits, balance payments, and any cancellation charges, regardless of which Guest made the original payment.", body_style))
    story.append(Paragraph("<b>3.7</b> If any portion of the Trip cost is paid by credit card, Venmo, or PayPal, the Guest agrees not to initiate a chargeback, payment dispute, or buyer-protection claim through the card issuer, Venmo, or PayPal for amounts properly charged under these Terms, and to raise any such dispute directly with the Organizers first.", body_style))

    story.append(Paragraph("4. Cancellation by the Guest", h1_style))
    story.append(Paragraph("<b>4.1</b> Cancellation before the Balance Due Date: the US$ 2,000 deposit is forfeited; any further payments already made are refunded in full.", body_style))

    # PAGE 2
    story.append(PageBreak())
    story.append(Paragraph("<b>4.2</b> Cancellation on or after the Balance Due Date but before November 15, 2026: 50% of the total Trip cost is forfeited.", body_style))
    story.append(Paragraph("<b>4.3</b> Cancellation on or after November 15, 2026: no refund is available. At the Organizers’ discretion, a full or partial credit toward a future departure of this Trip may be offered, subject to availability.", body_style))
    story.append(Paragraph("<b>4.4</b> The Organizers will make good-faith efforts to find a replacement booking if a spot is cancelled. If a cancelled spot is subsequently filled by a new Guest, the Organizers will refund the cancelling Guest the amount recovered from the replacement booking, less a US$ 250 administrative fee and any non-recoverable costs already committed on the cancelling Guest's behalf (such as permits or deposits paid to lodges). This applies even where the cancellation falls within the no-refund window in Section 4.3.", body_style))
    story.append(Paragraph("<b>4.5</b> Cancellations must be made in writing (email is acceptable). The effective date of cancellation is the date such notice is received by the Organizers.", body_style))
    story.append(Paragraph("<b>4.6</b> We strongly recommend that all Guests purchase comprehensive travel insurance, including trip cancellation and interruption cover, at the time of booking — see Section 7.", body_style))

    story.append(Paragraph("5. Changes or Cancellation by the Organizers", h1_style))
    story.append(Paragraph("<b>5.1 Minimum numbers:</b> this Trip requires a minimum of six (6) confirmed Guests to proceed at the price quoted. The Organizers will confirm by November 1, 2026 whether this minimum has been met. If not reached by that date, the Organizers may cancel the Trip (full refund of all payments) or offer Guests the option to proceed with the Trip at an adjusted price.", body_style))
    story.append(Paragraph("<b>5.2</b> The Organizers may make reasonable changes to the itinerary, accommodations, or trip leaders where required by circumstances beyond its control, including park permit availability, weather, wildlife conditions, lodge availability, or safety concerns. Where a named co-director (Himanshu Bagde or P S Srinivas) becomes unable to lead the Trip due to unavoidable reasons, the Organizers will notify Guests as soon as reasonably possible and arrange a qualified replacement.", body_style))
    story.append(Paragraph("<b>5.3</b> If the Organizers cancel the Trip for a reason other than Force Majeure (Section 11) or insufficient bookings (Section 5.1), Guests will receive a full refund of all payments made. This refund is the Guest's sole remedy; the Organizers are not responsible for any other costs incurred by the Guest, including flights, visas, or gear purchased for the Trip.", body_style))

    story.append(Paragraph("6. Travel Documents", h1_style))
    story.append(Paragraph("<b>6.1</b> Guests are solely responsible for holding a valid passport, the correct visa or e-Visa for entry to India, and any other documentation and/or health requirements required for travel.", body_style))
    story.append(Paragraph("<b>6.2</b> The Organizers are not responsible for losses arising from a Guest's failure to obtain correct travel documents.", body_style))

    story.append(Paragraph("7. Health, Fitness, and Insurance", h1_style))
    story.append(Paragraph("<b>7.1</b> This Trip involves vehicle-based safaris in open 4x4 vehicles, early-morning starts, late-night astrophotography sessions, long days, and exposure to heat — April daytime temperatures in central India commonly exceed 35°C (95°F) — and to wildlife in its natural habitat. Guests should also expect to carry and manage their own camera equipment and luggage throughout the Trip.", body_style))
    story.append(Paragraph("<b>7.2</b> Guests are solely responsible for honestly assessing their own fitness for the Trip as described, and for disclosing to the Organizers, before booking, any medical condition that may affect their ability to participate safely. The Organizers may decline or discontinue a Guest's participation where a physical or medical condition poses a risk to that Guest or to others, and may request written medical clearance before departure where reasonably necessary.", body_style))
    story.append(Paragraph("<b>7.3</b> Guests are required to hold comprehensive travel insurance valid internationally, covering at minimum: emergency medical and evacuation expenses (minimum US$ 100,000 medical, US$ 200,000 evacuation and repatriation), trip cancellation and interruption, and loss of personal belongings, for the full duration of the Trip.", body_style))
    story.append(Paragraph("<b>7.4</b> Guests must provide the Organizers, no later than 30 days before departure: proof of the insurance required under 7.3, the insurer's emergency contact details and policy number, and the names, relationship, phone number, and email address of two personal emergency contacts. Failure to provide this information may result in exclusion from the Trip without refund.", body_style))

    # PAGE 3
    story.append(PageBreak())
    story.append(Paragraph("<b>7.5</b> The Organizers are not a medical provider and make no representation regarding the availability or quality of medical care during the Trip. While acceptable medical facilities are available in Nagpur, Guests are informed that medical facilities near Pench and Tadoba-Andhari are limited, and emergency evacuation may take considerable time.", body_style))
    story.append(Paragraph("<b>7.6</b> Guests are solely responsible for the care, security, and insurance of their own photographic and personal equipment (including cameras, lenses, star trackers, laptops, etc.) throughout the Trip. The Organizers accept no liability for loss, theft, or damage to personal equipment during transit, safaris, astrophotography sessions, or at lodges.", body_style))
    story.append(Paragraph("<b>7.7</b> Given the close, shared travel environment (vehicles, meals, and lodges), Guests acknowledge the general risk of exposure to contagious illness during the Trip. A Guest experiencing symptoms of a contagious illness should inform the co-directors promptly and follow their reasonable requests (such as mask use or a period of separation from the group) for the wellbeing of the group.", body_style))

    story.append(Paragraph("8. Wildlife, Weather, and Itinerary Disclaimer", h1_style))
    story.append(Paragraph("<b>8.1</b> Wildlife sightings, weather conditions, and night-sky visibility are governed by nature and cannot be guaranteed. References in Trip marketing materials to sighting likelihood, seasonal conditions, or sky visibility reflect historical patterns and do not guarantee any specific outcome on this departure.", body_style))
    story.append(Paragraph("<b>8.2</b> Itineraries, safari zone allocations, and session timings may be adjusted by trip leaders or by local park or forest department authorities at any time, including after the Trip has begun, to maximize safety or opportunity, or as required by permit allocation.", body_style))

    story.append(Paragraph("9. Code of Conduct and Park Regulations", h1_style))
    story.append(Paragraph("<b>9.1</b> Guests agree to comply with all rules and regulations of Pench National Park, Tadoba-Andhari Tiger Reserve, and any other protected area visited, as communicated by trip leaders, naturalist guides, or park authorities.", body_style))
    story.append(Paragraph("<b>9.2 Drones:</b> India's import regulations make it very difficult for tourists to bring personal drones into the country, and drones are not permitted inside either reserve in any case. Guests are strongly advised not to bring drones on this Trip. The Organizers are not responsible for any drone confiscated, delayed, or refused entry by Indian customs authorities.", body_style))
    story.append(Paragraph("<b>9.3</b> The Organizers may, at their sole discretion, remove any Guest from the Trip without refund where that Guest's conduct is judged to endanger the safety or enjoyment of the group, or to violate park regulations.", body_style))
    story.append(Paragraph("<b>9.4 Late arrival or early departure:</b> no refund is available for any portion of the Trip missed due to a Guest's late arrival or early departure. A Guest arriving late is responsible for any additional cost of rejoining the group, and the Organizers cannot guarantee that a late Guest will be able to rejoin. A Guest departing early remains responsible for their own costs and safety from that point onward, including the cost of transportation to Nagpur airport from wherever they decide to depart early.", body_style))

    story.append(Paragraph("10. Assumption of Risk and Release of Liability", h1_style))
    story.append(Paragraph("<b>10.1</b> Guests acknowledge that travel to, and participation in, wildlife safaris and remote outdoor locations carries inherent risks, including but not limited to injury from wildlife, road travel accidents, illness, extreme temperatures, uneven or unfamiliar terrain, and the general risks of international travel.", body_style))
    story.append(Paragraph("<b>10.2</b> To the fullest extent permitted by applicable law (Indian as well as the laws applicable in any other jurisdiction relevant to the Guest), Guests voluntarily assume these risks and release the Trip Leaders and their respective agents, from claims, liabilities, losses, or damages arising from participation in the Trip, except to the extent caused by the Organizers' gross negligence or willful misconduct.", body_style))

    # PAGE 4
    story.append(PageBreak())
    story.append(Paragraph("11. Force Majeure", h1_style))
    story.append(Paragraph("<b>11.1</b> Neither party is liable for failure or delay in performance due to circumstances beyond its reasonable control, including natural disasters, extreme weather, pandemic or epidemic, government travel restrictions or advisories, civil unrest, war, terrorism, strikes, or reserve closures (a &ldquo;Force Majeure Event&rdquo;).", body_style))
    story.append(Paragraph("<b>11.2</b> If the Trip is cancelled due to a Force Majeure Event, the Organizers will use reasonable efforts to recover costs from third-party suppliers (lodges, ground operator, permits) and will refund Guests the amount recovered, less any costs already reasonably incurred by the Organizers in preparing for the Trip. The Organizers are not obligated to refund amounts that cannot be recovered from third parties.", body_style))

    story.append(Paragraph("12. Limitation of Liability", h1_style))
    story.append(Paragraph("<b>12.1</b> To the fullest extent permitted by Indian (and all other relevant) law, the Organizers’ total liability to any Guest arising from the Trip shall not exceed the total amount paid by that Guest for the Trip.", body_style))
    story.append(Paragraph("<b>12.2</b> The Organizers are not liable for indirect, incidental, or consequential damages, including lost wages, missed flight connections, or the cost of alternative travel arrangements.", body_style))

    story.append(Paragraph("13. Third-Party Suppliers", h1_style))
    story.append(Paragraph("<b>13.1</b> Lodges, safari vehicle operators, drivers, and other on-the-ground vendors are independent third-party suppliers, distinct from the Trip Leaders. While the Trip Leaders select suppliers they believe to be reputable, the Trip Leaders are not liable for a supplier's own negligence, error, or failure to deliver a service to the expected standard.", body_style))

    story.append(Paragraph("14. Photography and Media", h1_style))
    story.append(Paragraph("<b>14.1</b> Photography or video taken by trip leaders for the purpose of documenting the Trip may include images of Guests. By participating, Guests grant the Organizers a non-exclusive, royalty-free license to use such images to promote future editions of this Trip (for example, on the Trip website, brochure, or social media), unless the Guest opts out in writing before the Trip begins.", body_style))
    story.append(Paragraph("<b>14.2</b> This section does not affect a Guest's ownership of photographs they personally capture during the Trip.", body_style))
    story.append(Paragraph("<b>14.3</b> If a Guest chooses to share their own trip photographs or video with the Organizers after the Trip, the Guest retains full ownership, and grants the Organizers a non-exclusive, royalty-free license to use that material to promote future editions of this Trip, with photographer credit given where practical. The Organizers will not use a Guest's personal material for any other purpose without that Guest's separate written consent.", body_style))

    story.append(Paragraph("15. Complaints", h1_style))
    story.append(Paragraph("<b>15.1</b> A Guest with a concern during the Trip should raise it with a co-director at the time, so it can be addressed while still on Trip. If a Guest remains dissatisfied after the Trip, a written complaint should be sent to the Organizers within 30 days of the Trip's completion. The Organizers will respond in good faith within a reasonable time.", body_style))

    story.append(Paragraph("16. Data Privacy", h1_style))
    story.append(Paragraph("<b>16.1</b> Personal information provided by a Guest (including contact details, dietary needs, health information relevant to participation, and emergency contacts) is used solely to organize and run the Trip, and is shared with third-party suppliers (such as lodges and the ground transport operator) only to the extent necessary to arrange their services.", body_style))
    story.append(Paragraph("<b>16.2</b> The Organizers will not use a Guest's personal information for marketing purposes without that Guest's consent, and will not sell or share Guest information beyond what is necessary to operate the Trip.", body_style))

    story.append(Paragraph("17. Governing Law and Dispute Resolution", h1_style))
    story.append(Paragraph("<b>17.1</b> These Terms are governed by the laws of India, without regard to conflict-of-law principles.", body_style))

    # PAGE 5
    story.append(PageBreak())
    story.append(Paragraph("<b>17.2</b> The parties will first attempt in good faith to resolve any dispute through informal discussion and, if needed, mediation. If a dispute cannot be resolved this way, it shall be resolved through arbitration in the city of Nagpur, India.", body_style))
    story.append(Paragraph("<b>17.3</b> Any claim must be brought within one year of the event giving rise to it.", body_style))

    story.append(Paragraph("18. General", h1_style))
    story.append(Paragraph("<b>18.1</b> These Terms, together with the Trip itinerary and any written confirmation provided at booking, constitute the entire agreement between the Guest and the Organizers.", body_style))
    story.append(Paragraph("<b>18.2</b> If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.", body_style))
    story.append(Paragraph("<b>18.3</b> The Organizers may update these Terms from time to time. The version in effect at the time of the Guest’s booking governs the Guest’s Trip.", body_style))

    story.append(Paragraph("19. Acknowledgment", h1_style))
    story.append(Paragraph("By submitting your deposit, you confirm that you have read, understood, and agree to these Terms and Conditions in full.", body_style))

    doc.build(story)
    
    with open(pdf_path, "rb") as f:
        pdf_bytes = f.read()
        b64_str = base64.b64encode(pdf_bytes).decode("utf-8")
        
    with open("src/assets/termsPdfBase64.ts", "w", encoding="utf-8") as out:
        out.write(f'export const TERMS_PDF_BASE64 =\n  "data:application/pdf;base64,{b64_str}"\n')
    
    if os.path.exists(pdf_path):
        os.remove(pdf_path)

    print(f"Successfully generated PDF ({len(pdf_bytes)} bytes) and updated termsPdfBase64.ts with standardized US$ format")

if __name__ == "__main__":
    generate_pdf()
